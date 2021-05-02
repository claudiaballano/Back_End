const { v4: uuidv4 } = require('uuid');


const BBDD_cats = [{
    id: 1,
    name: 'Loki',
    race: "Vulgaris",
},{
    id: 2,
    name: 'Canela',
    race: 'Red',
}, {
    id: 3,
    name: 'Tach',
    race: 'Carey'
}
]

module.exports = class Cats{
    constructor (name, race){
        this.name= name
        this.race= race
        this.id=uuidv4()
    }

    addCat(){
        BBDD_cats.push({name: this.name, race: this.race, id: this.id})
    }

    static findAll(){
        
        return BBDD_cats

    }
}
// exports.addCat=(name, race)=>{
    
//     const newCat={
//         id: uuidv4(),
//         name: name,
//         race: race,
//     }
//     return BBDD_cats.push(newCat)
// }

// exports.findAll=()=>{
//     return BBDD_cats
// }
