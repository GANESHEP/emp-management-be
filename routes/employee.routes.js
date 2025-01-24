const express = require('express');
const  empcontroller  = require('../controllers/empcontroller');
const router = express.Router();


router.post('/create', empcontroller.createEmp)

router.get('/get', empcontroller.getEmp);

router.get('/:id', empcontroller.employeeById);

router.put('/:id', empcontroller.updateEmpId);

router.delete('/:id', empcontroller.deleteEmpId)


module.exports = router