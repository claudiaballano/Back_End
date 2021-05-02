today = new Date();
cmas = new Date(today.getFullYear(), 11, 25);
dias_restantes = DateDiff(today, cmas)

function DateDiff(d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();
    return Math.ceil((t2 - t1) / (24 * 3600 * 1000)); //la diferencia devuelve la respuesta en milisegundos, por 1000 60 60 24 convertir a día
}

console.log(`Faltan ${dias_restantes} dias para Navidad`)