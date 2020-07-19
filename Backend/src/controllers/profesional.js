const Profesional = require('../models/profesional');

const profesionalCtrl = {};


profesionalCtrl.getProfesionals = async (req, res) => {
    const  profesional =  await Profesional.find()
   res.json(profesional); 
}

profesionalCtrl.createProfesional = async (req, res) => {
    const profesional = new Profesional(req.body);
    await profesional.save();
    res.json({
       'status' : 'Profesional Saved'
    });
}


profesionalCtrl.getProfesional = async (req, res) => {
    const profesional = await Profesional.findById(req.params.id);
    res.json(profesional);
}

profesionalCtrl.updateProfesional = async (req, res) => {
    const {id} = req.params;
    const profesional = {
      collegiate_number : req.body.collegiate_number,
      name: req.body.name,
      surname: req.body.surname,
      second_surname: req.body.second_surname,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      nif: req.body.nif,
      type_of_profesional: req.body.type_of_profesional,
      street: req.body.street,
      portal_number: req.body.portal_number,
      door: req.body.door,
      postal_code: req.body.postal_code,
      city: req.body.city,
      
    };
    await Profesional.findByIdAndUpdate(id, {$set: profesional}, {new: true});
    res.json({status: 'Profesional Update'});
}

profesionalCtrl.deleteProfesional = async (req, res) => {
    await Profesional.findByIdAndRemove(req.params.id);
    res.json({status: 'Profesional Delete'});
}



module.exports = profesionalCtrl;