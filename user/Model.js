
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');
//let constantPlugin = require('mongoose-constant');

const EmailValidator = [
    validate({
        validator: 'matches',
        arguments: /^[\w.]+[@]+[a-zA-Z]+.com$/,
        message: 'Invalid email address'
    })
];

const PhoneValidator = [
    validate({
        validator: 'matches',
        arguments: /^923[1-9]{9}$/,
        message: 'its not valid phone number'
    })
];



let UserSchema = new Schema({
    
        firstname:   {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, lowercase: true, unique: true, validate: EmailValidator, required: true },
        phone: {type: Number, required: true , validate: PhoneValidator},
        password: {type: String, required: true},
    }
);

module.exports = mongoose.model('Users', UserSchema);