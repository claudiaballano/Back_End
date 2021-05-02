
const { v4: uuidv4 } = require('uuid');

const BBDD_photos = []

module.exports = class Photo{
    
    constructor (fecha_creacion, url, titulo, color){
        this.fecha_creacion= fecha_creacion
        this.url= url
        this.titulo=titulo
        this.color=color
        this.id=uuidv4()
    }

    addPhoto(){
        BBDD_photos.push(this)
    }

    static findAll(){
        return BBDD_photos

    }
    static deletePhoto(id){
        let index=BBDD_photos.findIndex((photo)=>photo.id==id)
        return BBDD_photos.splice(index, 1);
    }

    static findPhoto(idToFind){
        return BBDD_photos.filter((photo)=>photo.id==idToFind)[0]
    }
    static editPhoto(id, titulo, fecha_creacion){

        let index=BBDD_photos.findIndex((photo)=>photo.id==id)
        BBDD_photos[index].titulo=titulo
        BBDD_photos[index].fecha_creacion=fecha_creacion
        return BBDD_photos
    }

}

