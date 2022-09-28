const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const validateEmail = (email) =>{
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(email);
};

const patientSchema = new Schema({
    _id:String,
    patient: {
        type: String,
        trim: true,
        required:[true, 'The patient is required']
    },
    documentType:{
        type: String,
        trim: true,
        required:[true, 'The document type is required']
    },
    document: {
        type: String,
        trim: true,
        required:[true, 'The document is required'],
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required:[true, 'The email is required'],
        validate: {
            validator: validateEmail,
            message: 'Type valid email'
        }
        
    },
    address: {
        type: String,
        trim: true,
        required:[true, 'The address is required'],
    },
    dentist: {
        type: String,
        trim: true,
        required:[true, 'The dentist is required'],
    },
    bloodType: {
        type: String,
        trim: true,
        required:[true, 'The blood type is required'],
    },
    treatment: {
        type: String,
        trim: true,
        required:[true, 'The treatment is required'],
    },
    price: {
        type: Number,
        required:[true, 'The price is required']
    },
    state: {
        type: Number,
        required:[true, 'The state is required']
    },

},{timestamps: true});

patientSchema.plugin(mongooseSoftDelete);

module.exports = mongoose.model('patient', patientSchema)