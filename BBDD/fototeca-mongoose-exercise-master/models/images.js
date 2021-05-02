const mongoose = require ('mongoose')

const { Schema } = mongoose;

const imageSchema = new Schema({

    title:  {
      type: String,
      maxLength: [10, 'The title musg be 10 characters max'],
      required:true,
    }, 
    predominantColor: {
      type:[Number],
      validate: function(v) {
        return v.length==3
      }
    },
    imageUrl:   {
      type: String,
      required: true,
      validate: {
        validator: (v) => /(http(s?):)+([/|.|\w|\s])*\.(?:jpg|png)/.test(v),
        message: 'Url validation failed'
      }
    },
    date: Date,
});

const Image = mongoose.model('Image', imageSchema)


module.exports= Image