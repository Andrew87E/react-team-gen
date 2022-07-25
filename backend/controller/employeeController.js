const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs')
const colors = require('colors')
const employees = require('../db/employees.json')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

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
    readAndAppend(newEmployee, '../db/employees.json')
    res.json('employee added successfully')
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
