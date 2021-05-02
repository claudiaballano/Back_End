
// @param {array} quotes
// @return {number} max profit

const quotes = [1, 2, 3, 4, 5, 6] // => 15  (buy at 1,2,3,4,5 and then sell all at 6)

const quotes2 = [6, 5, 4, 3, 2, 1] //=> 0   (nothing to buy)

const quotes3 = [ 1, 6, 5, 10, 8, 7 ] //=> 18  (buy at 1,6,5 and sell all at 10)


//FUNCIÓN SIMPLIFICADA

function getMostProfitFromStockQuotes(quotes) {

    let max_profit = 0;
    let max_num = 0;  

    for (var i = quotes.length - 1; i >= 0; i--) {
        quotes[i] >= max_num ? max_num = quotes[i] : max_profit += max_num - quotes[i]
    }
    return max_profit
}



//FUNCIÓN DESARROLLADA CON EXPLICACIÓN


// INICIO

    const quotes4 = [31, 312, 3, 35, 33, 3, 44, 123, 126, 2, 4, 1]

        // Buy on day 1 and sell on day 2   
        // Buy on day 3 and sell on day 6
        // Buy on day 7 and sell on day 9

        // [31, 312] 
        // [3, 35, 33, 3, 44, 123, 126] 
        // [2, 4]

    let sum= (312-31)+(126-3)+(126-35)+(126-33)+(126-3)+(126-44)+(126-123)+(4-2)
    console.log('Suma para explicación: ', sum)


// PROCESO 

    // 1) La función debe devolver el máximo beneficio. 

    // 2) El beneficio al inicio es 0 

    // 3) La función debe encontrar los dias de venta. Para obtener el máximo beneficio, el dia de venta tiene que ser un numero mayor que los anteriores. Ejemplo:

        // [3, 35, 33, 3, 44, 123, 126]

        // 126 es mayor que 123, 44, 3, 33, 35, 3

        // [126, 123, 44, 33, 35, 3]

    // 4) Si se recorre el array al revés se puede guardar en una variable el dia de venta e ir comprobando si es el número máximo hasta el momento. 

    // 4.1) Si el número siguiente en el bucle es mayor o igual que a si mismo, se guarda en la variable. Si no, no. 

    // 4.2) El beneficio debe ser el beneficio hasta el momento sumado a la diferencia entre el número máximo hasta el momento y la posición en la que se encuentra el bucle. 


function getMostProfitFromStockQuotes(quotes) {
    
    // El beneficio al inicio es 0 
    
    let max_profit = 0

    // El dia de venta (número máximo hasta el momento) al inicio también es 0
    
    let max_num = 0

    // Para recorrer el array al revés se necesita un bucle que inicie la iteración en la última posición, que acabe en la primera y que vaya restando una a cada vuelta. 

    const LAST_POSITION_ARR = quotes.length - 1

    for (var i = LAST_POSITION_ARR; i >= 0; i--) {

        // Dentro del bucle tiene que hacerse una condición que permita guardarse el número máximo

        if (quotes[i] >= max_num) {
            max_num = quotes[i]
        }

        // El bucle tiene que ir guardando el beneficio obtenido a cada iteración
        
        max_profit += max_num - quotes[i]
    }

    // Para cuando se sale del bucle, la función debe devolver el beneficio máximo  
    // @return {number} max profit

    return max_profit
}

console.log(getMostProfitFromStockQuotes(quotes4))
// console.log(getMostProfitFromStockQuotes(quotes3))
// console.log(getMostProfitFromStockQuotes(quotes2))
// console.log(getMostProfitFromStockQuotes(quotes))


