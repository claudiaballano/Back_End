const express = require ('express')
const router = express.Router()




const galleryController = require ('../controllers/gallery.js')



router.get('/', galleryController.getAllPhotos)


router.get('/add-photo',galleryController.getPhoto)

router.post('/add-photo',galleryController.postPhoto)

router.delete('/delete', galleryController.postDeletedPhotos)

router.post('/edit', galleryController.postEditPhotos)

router.get('/edit/:id', galleryController.getEditPhotos)

module.exports = router
