const { Db } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://root:root@cluster0.kpgip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run (){

    await client.connect()

    const database= client.db('music')
    
    const songs = database.collection('songs')

    const song = {
        name: 'Madonna',
        song_name: 'Frozen',
        year: 1996,
        genres: ['Pop']
    }

    const result = await songs.insertOne(song)

    console.log(`${result.insertedCount} documents were inserted with the __id: ${result.insertedId}`)

    await client.close()
}

async function find(){
    await client.connect()

    const database= client.db('music')
    
    const songs = database.collection('songs')

    const query = {year:1996}

    const song = await songs.findOne(query)
    console.log(song)

    await client.close()  
}

find()
// client.connect(err => {
//     if (err) throw new Error ('Ha ocurrido un error:'+ error)
// //   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('Conexión OK')

  

//   client.close();
// });