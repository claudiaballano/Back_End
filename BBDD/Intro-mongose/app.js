const mongoose = require('mongoose');

const uri = 'mongodb+srv://root:root@cluster0.kpgip.mongodb.net/cats'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Conection OK')

    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,

        }
    });

    kittySchema.methods.speak = function () {
        const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }

    const Kitten = mongoose.model('Kitten', kittySchema) // Esto crea como una clase

    // const loki = new Kitten ({name: 'Loki'})

    // loki.save((err, catCreated)=>{
    //     if(err)return console.log(err)
    //     console.log('Hemos creado el gato')
    // })

    const fluffy = new Kitten({ name: 'fluffy' });
    
    fluffy.save( (err, fluffy)=> {
        if (err) return console.error(err);
        fluffy.speak();
      });
    

    Kitten.find()
});

