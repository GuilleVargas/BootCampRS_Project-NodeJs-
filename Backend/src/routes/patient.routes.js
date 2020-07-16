const { Router } = require('express');
const router = Router(); 

const patients = require('../controllers/patient');


router.get('/', patients.getPatients);
router.post('/', patients.createPatient);
router.get('/:id', patients.getPatient);
router.put('/:id', patients.updatePatient);
router.delete('/:id', patients.deletePatient);



module.exports = router;