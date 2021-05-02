const express = require ('express')
const router = express.Router()



// Importamos el modelos que queremos importar


const catsController =require ('../controllers/cats.js')

// Engine

router.get('/', catsController.getAllCats)

router.get('/filter', catsController.getFilteredCats)

router.get('/add-cat',catsController.getCats)

router.post('/add-cat',catsController.postCats)

module.exports = router
