
const Cats = require ('../models/cats')

exports.getAllCats=(req,res,next)=>{

    const allCats = Cats.findAll()

    res.render('cats/index', {cats:allCats});


}



exports.getFilteredCats=(req,res,next)=>{

    const race = req.query.race
    const allCats = Cats.findAll()
    // if(!allCats.some((cat)=> race.toLowerCase() === cat.race.toLowerCase())){
    //     return res.send('La raza que buscas no se ha encontrado'); 
    // } 
    const filteredCats=allCats.filter((cat)=> race.toLowerCase() === cat.race.toLowerCase())
    res.render('cats/index', {cats:filteredCats, race:race});
    // res.send('Lista de todos los gatitos'+ JSON.stringify(allCats))

}

exports.getCats=(req,res,next)=>{
    res.render('cats/form');
}

exports.postCats=(req,res,next)=>{

    const cat= new Cats (req.body.name, req.body.race)
    
    cat.addCat()

    res.redirect('/cats')

}