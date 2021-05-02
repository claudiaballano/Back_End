class Coche {

    /**
     * 
     * @param {string} modelo Representa el modelo de coche (marca, serie, etc)
     * @param {string} matricula Mátricula 
     * @param {boolean} gps Indica si lleva navegación GPS integrada
     * @param {number} deposito Indica cuan lleno está el depósito. 100 indica que está completamente lleno, 0 que esta vacío.
     */
    constructor(modelo, matricula, gps) {
        this.modelo = modelo;
        this.matricula = matricula;
        this.diesel = gps;
        this.deposito = 100;
    }

    llenarDeposito() {
        this.deposito = 100;
    }

    usar() {
        this.deposito--;
    }

}

let cocheClara = new Coche("Mercedes","6664MWH",true)

console.log(cocheClara.usar())
console.log(cocheClara)


/**
 * Contesta las preguntas en este mismo archivo
 */

/**
 * 1. Cuantos parámetros de entrada tiene el constructor de esta clase ?
 * Respuesta: 3
 *
 * 2. Cual es el valor de la propiedad del objeto "this.deposito" cuando instanciamos esta clase?
 * Respuesta: 100
 *
 * 3. Escribe un ejemplo de como crearías un objeto de la clase Coche, pasándole al constructor todos los parámetros
 * Respuesta:
 * 
 * let cocheClara = new Coche("Mercedes","6664MWH",true)
 *
 * 4. Supón que la variable "coche" es una instancia de la clase Coche. Que mostrará por el terminal: console.log(coche.llenarDeposito())? Por qué?
 *  Respuesta:
 *  Undefined
 *  Porque no tiene return la función, no devuelve nada. 
 *  
 *  El console.log no te va a mostrar que el deposito vuelve a estar a 100. Si haces: 
 *  cocheClara.usar())
    console.log(cocheClara) --> Esto SÍ dará 99 de desposito 
    cocheClara.llenarDeposito()) 
    console.log(cocheClara) --> Esto SÍ dará 100 de desposito 

 *  
 *
 */