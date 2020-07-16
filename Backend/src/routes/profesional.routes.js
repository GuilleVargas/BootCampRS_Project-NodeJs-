const { Router } = require('express');
const router = Router(); 

const profesionals = require('../controllers/profesional');


router.get('/', profesionals.getProfesionals);
router.post('/', profesionals.createProfesional);
router.get('/:id', profesionals.getProfesional);
router.put('/:id', profesionals.updateProfesional);
router.delete('/:id', profesionals.deleteProfesional);



module.exports = router;