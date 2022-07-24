const express = require('express');
const { getEmployees, setEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');
const router = express.Router();

router.route('/').get(getEmployees).post(setEmployee)
router.route('/:id').delete(deleteEmployee).put(updateEmployee)

module.exports = router;