const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs')
const colors = require('colors')
const employees = require('../db/employees.json')

//get employees from db
//route GET /api/employees
const getEmployees = asyncHandler(async (req, res) => {
    //grab existingemployees from db
    res.status(200).json(employees)

})

//add new employee to db
//route POST /api/employees
const setEmployee = asyncHandler(async (req, res) => {
    const { name, id, email, officeNumber, gitHub, school } = req.body
    const newEmployee = { name, id, email, officeNumber, gitHub, school }
    const employeeArr = []
    employeeArr.push(employees)
    employeeArr.push(newEmployee)
    fs.writeFileSync(path.join(__dirname, '../db/employees.json'), JSON.stringify(employeeArr, null, 2))
    res.status(201).json(newEmployee)
    console.info('New employee added to db'.green)
}
)
//update employee from db by ID
//route PUT /api/employees 
const updateEmployee = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update employee ${req.params.id}` })
})

//get employees from db
//route GET /api/employees
const deleteEmployee = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete employee ${req.params.id}` })
})







module.exports = {
    getEmployees,
    setEmployee,
    updateEmployee,
    deleteEmployee
}