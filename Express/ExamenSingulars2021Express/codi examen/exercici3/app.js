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


const baseDatosCoche = [];
baseDatosCoche.push(new Coche("Opel Astra", "1984 GI", false));
baseDatosCoche.push(new Coche("Seat Ibiza", "2021 AZ", false));
baseDatosCoche.push(new Coche("Renault", "2211 PL", true));


/**
 * 
 * @param {array} baseDatosCoche Un array de objetos tipo Coche
 * @param {string} matricula Una mátricula de coche
 */
function existeMatricula(baseDatosCoche, mtr) {
    let matriculas=[]
    baseDatosCoche.forEach((coche)=>{
        matriculas.push(coche.matricula)
    })
    return matriculas.includes(mtr)
    
}

console.log(true, existeMatricula(baseDatosCoche, "2211 PL"));
console.log(false, existeMatricula(baseDatosCoche, "2211 GI"));
console.log(false, existeMatricula(baseDatosCoche, "0000 PL"));


