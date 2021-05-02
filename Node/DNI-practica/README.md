# DEPARTAMENTO POLICIA

Trabajamos en el departamento de interior, comprobando la autenticidad de ciertos DNIs que nos pasan a través de una base de datos externa.

Cada dia recibimos en nuestro navegador una serie de DNIs. Tenemos a los dueños de dichos documentos en comisaria. Debemos comprobar si los DNIs son válidos y/o están caducados para proceder en consecuencia.

Vídeo explicativo - [Link](https://oscarm.tinytake.com/tt/NTI3OTAzN18xNjUyNTgwNg)

# Requisito 1

Implementa, en LA CARPETA CLIENT, la funcionalidad mísima y necesaria para que, al hacer click encima de un fila, se genera un llamada GET contra el endpoint del  servidor '/comporbarDNI'; donde le pasamos como parámetro el Dni clickado. Podeís utilizar QueryString para pasar la información

Por ejemplo: si hacemos click en la primera fila debería generarse una llamada a http://localhost:3000/comprobarDNI?dni=40400500B&caducidad=2021-11-11

Recomendación: Añadir un listener a todas las filas, y explorar la propiedad de event.currentTarget

# Requisito 2

Implementa, en LA CARPETA SERVER, la funcionalidad mínima y necesaria para recibir la petición del cliente con el DNI a comprobar. 

El servidor debe devlolver un JSON con la siguiente information:

{
    esDniValido: true|false
}

Indicando si el DNI es válido o no, bien sea porque está caducado o porque el formato no es correcto.

Pista: Es fácil conseguir esta funcionalidad modificando el método __esDniValido__ usando el otro método de clase __estaCaducado__

Pista: Como devolver un JSON con NodeJS: https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express

# Requisito 3

Modifica, em LA CARPETA CLIENT, tu JavaScript para que procese la repsuesta del servidor. Si el DNI es válido, entonces la fila debe colorearse de color VERDE.  En caso contrario, la colorearemos en NARANJA.

# Requisito 4

Modifica, en LA CARPETA SERVER:

1. Modifica el custom module DNI; para que la clase ofrezca un método que permita comprobar si un DNI pertence a un criminal buscado. 

2. Usa tu nueva funcionalidad en app.js, para enriquecer la respuesta del servidor. Debe responder ahora:

{
    esDniValido: true | false,
    criminalBuscado: true | false
}

En función de si el DNI pertenece o no a nuestra base de datos de criminales buscados

3. Modifica, en la CARPETA CLIENT, tu programa para que ahora pinte de color ROJO la fila de los criminales buscados, al recibir la respuesta del servidor.

# BONUS

Busca en http://npmjs.com una utulidad que permita comprobar si un DNI es vàlido. Instalala como dependencia de tu proyecto y úsala en vez del custom module para comporbar si un DNI es vàlido o está caducado (no te preocupes por los DNIs de criminales)

