
const getMongoId = require('../util/database').getMongoId
const getDb = require('../util/database').getDb

module.exports = class Message {
    constructor(content, type) {
        this.content = content;
        this.date = new Date();
        this.type = type;
    }


    static async save(content, type) {
        const db = getDb()
        const message = new Message(content, type)
        db.collection('messages')
        await insertOne(message)
    }

    static async fetchAll() {
        const db = getDb()
        const messages = db.collection('messages')
        return await messages.find().toArray()
    }

    static async fetchById(id) {
        const db = getDb()
        db.collection('messages')
        await find({_id: getMongoId(id)})
    }

}