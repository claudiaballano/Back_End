const Message = require('../models/message');

function transformarTipoMensaje(type) {
    const transformacion = { 1 : "Importante", 2: "Normal", 3: "Invisible"};

    return transformacion[type];
}

exports.showDetailsPage = async (req, res) => {
    const idMessage = req.params.idMessage;  
    console.log('Parámetro dinámico de la ruta:', idMessage);
    
    const messageObject = await Message.findById(idMessage);
    
    messageObject.typeMessageTxt = transformarTipoMensaje(messageObject.type);

    console.log("mensaje después de ser modificado por el controlador: ",  messageObject)

    res.render('messageDetails', {
        message : messageObject
    });   
    
}

exports.showMainPage = async (req, res) => {
    const allMessages = await Message.find();
    res.render('index', {
        messages: allMessages
    });
}

exports.showFormPage = (req, res) => {
    res.render('formNewMessage.ejs');
}

exports.postFormParge = async (req, res) => {

    const content = req.body.message;
    const type = req.body.type;

    const newMessage = new Message({ 
        content,
        type
    });

    await newMessage.save();
   
    res.redirect('/');
}