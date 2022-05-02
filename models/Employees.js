const {Schema, model} = require('mongoose')

const employeeSchema = new Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    nationality:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true,
        match: [
            /^(\d{10})$/,
            "Provide a valid phone number",
          ]
    },
    civil_status:{
        type: String,
        required:true
    },
    birthday:{
        type: String,
        required:true
    }
})


module.exports = model('Employee', employeeSchema)