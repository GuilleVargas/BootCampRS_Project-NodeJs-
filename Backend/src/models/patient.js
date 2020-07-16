/**
 *  ESTE ARCHIVO SIRVE PARA GUARDAR LOS DATOS DE LOS Pacientes
*/

'use strict'

const mogoose = require('mongoose');
const mongoose = require('../database');
const {Schema} = mongoose;

var patientSchema =  Schema ({
    nhc : {type: Number, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    second_surname: {type: String},
    gender: {type: String},
    birth_date: {type: String},
    nif: {type: String},
    street: {type: String},
    portal_number: {type: Number},
    door: {type: String},
    postal_code: {type: Number},
    city: {type: String},
    tarjet_number: {type: Number},
    insurance_name: {type: String},
    type_of_insurance: {type: String} 
});

module.exports = mongoose.model('Patient', patientSchema);