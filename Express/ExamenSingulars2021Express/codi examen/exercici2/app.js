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
        return this.deposito = 100;
    }

    usar() {
        return this.deposito--
    }

    acelerar(){
        return this.usar()*this.usar()
    }
    estaVacio(){
        return this.deposito==0
    }

}

let cocheClara = new Coche("Mercedes","6664MWH",true)



cocheClara.acelerar()
console.log(cocheClara)

cocheClara.estaVacio()

console.log(cocheClara.estaVacio())