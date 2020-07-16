const Patient = require('../models/patient');

const patientCtrl = {};


patientCtrl.getPatients = async (req, res) => {
   const patients =  await Patient.find()
   res.json(patients); 
}

patientCtrl.createPatient = async (req, res) => {
   const patient = new Patient(req.body);
   await patient.save();
   res.json({
      'status' : 'Patient Saved'
   });
};


patientCtrl.getPatient = async (req, res) => {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
}

patientCtrl.updatePatient = async (req, res) => {
    const {id} = req.params;
    const patient = {
      nhc : req.body.nhc,
      name: req.body.name,
      surname: req.body.surname,
      second_surname: req.body.second_surname,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      nif: req.body.nif,
      street: req.body.street,
      portal_number: req.body.portal_number,
      door: req.body.door,
      postal_code: req.body.postal_code,
      city: req.body.city,
      tarjet_number: req.body.tarjet_number,
      insurance_name: req.body.insurance_name,
      type_of_insurance: req.body.type_of_insurance
    };
    await Patient.findByIdAndUpdate(id, {$set: patient}, {new: true});
    res.json({status: 'Patient Update'});
};

patientCtrl.deletePatient = async (req, res) => {
   await Patient.findByIdAndRemove(req.params.id);
   res.json({status: 'Patient Delete'});
}



module.exports = patientCtrl;