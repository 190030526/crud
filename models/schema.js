const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    idno: {
        type: Number,
        required: true,
        
    }

})

module.exports = mongoose.model('schema',studentSchema)