
const Photo = require('../models/photos')

const allPhotos = Photo.findAll()

const { getColorFromURL } = require('color-thief-node');



exports.getAllPhotos = (req, res, next) => {
    res.render('gallery/index', { photos: allPhotos.sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion)) });

}

exports.getPhoto = (req, res, next) => {

    res.render('gallery/form', { urlUsed: false, incorrectUrl:false, url:""});
}

exports.postPhoto = (req, res, next) => {

    let fecha_creacion = req.body.fecha_creacion
    let url = req.body.url
    let titulo = req.body.titulo.toUpperCase()

    if (allPhotos.some((photo) => photo.url == url)) {
        res.render('gallery/form', { urlUsed: true, incorrectUrl:false, url: url})
    }
    else if(url.split('/')[2] !== 'i.picsum.photos' ){
        res.render('gallery/form', { urlUsed: false, incorrectUrl:true, url: url})
    }

    else {
        (async () => {
            const dominantColor = await getColorFromURL(url);
            const photo = new Photo(fecha_creacion, url, titulo, dominantColor)
            photo.addPhoto()
            res.redirect('/gallery')
        })();
    }

}

exports.postDeletedPhotos =(req, res, next)=>{
    Photo.deletePhoto(req.body.id)
}

exports.getEditPhotos=(req, res, next)=>{

    var id = req.params.id;
    let selectedPhoto=Photo.findPhoto(id)
   
    res.render('gallery/edit', { photo:selectedPhoto})
}

exports.postEditPhotos=(req, res, next)=>{
    let nuevoTitulo=req.body.titulo
    let nuevaFecha=req.body.fecha_creacion
    let id= req.headers.referer.split("/")[5]

    Photo.editPhoto(id, nuevoTitulo, nuevaFecha)
    res.redirect('/gallery')
}
