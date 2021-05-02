// 1. Asociar un evento click a todas las filas de la tabla
// 2. Al hacer click en una fila, comprobad que sois capaces de mostrar por consola el DNI y la fecha de caducidad de la fila clicada
// 3. Hacer un fetch contra el servidor al endpoint '/comporbarDNI'; pasandole los parámetros de la QueryString adecuadamente. Teneis que ser capaces de construir una QueryString del estilo 'http://localhost:3000/comprobarDNI?dni=123456789A&caducidad=2022-12-12


const table = document.querySelector('table');

const rows = table.getElementsByTagName("tr");

for (i = 0; i < rows.length; i++) {
    let currentRow = table.rows[i];
    let createClickHandler = function (row) {
        return function () {

            var cellDNI = row.getElementsByTagName("td")[1];
            var dni = cellDNI.innerHTML;
            var cellCaducidad = row.getElementsByTagName("td")[2];
            var caducidad = cellCaducidad.innerHTML;

            validateDNI(dni, caducidad, currentRow)

        };
    };
    currentRow.onclick = createClickHandler(currentRow);
}

function validateDNI(dni, caducidad, currentRow) {

    // console.log("DNI:" + dni);
    // console.log("Caducidad:" + caducidad);

    const url = new URL('http://127.0.0.1:3000/comprobarDNI')

    const params = { DNInumber: dni, caducidad: caducidad }

    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw "Error en la llamada Ajax";
            }
        }).
        then(data => checkDNI(data, currentRow)).
        catch(err => {
            console.error(err)
        })
}

function checkDNI(data, currentRow) {
    // console.log(data.esDniValido)
    if (data.esDniValido) {
        return currentRow.style.backgroundColor = 'green'
    } else if (data.esCriminalBuscado) {
        return currentRow.style.backgroundColor = 'red'
    }
    return currentRow.style.backgroundColor = 'orange'

}

