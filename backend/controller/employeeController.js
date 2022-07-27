const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs')
const colors = require('colors')
const Employee = require('../model/employeeModel')

//get employees from db
//route GET /api/employees
const getEmployees = asyncHandler(async (req, res) => {
    Employee.find().then((data) => {
        res.status(200).json(data)
    })

})

//add new employee to db
//route POST /api/employees
const setEmployee = asyncHandler(async (req, res) => {
    console.info('New employee added to db'.green)
    Employee.create(req.body).then((data) => {
        res.status(200).json(data)
    })
})
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