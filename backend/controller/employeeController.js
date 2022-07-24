//get employees from db
//route GET /api/employees
const getEmployees = (req, res) => {
    res.status(200).json({ message: 'get employees' })
}

//add new employee to db
//route POST /api/employees
const setEmployee = (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please add a text field' })
    }

    res.status(200).json({ message: 'create employee' })
}

//update employee from db by ID
//route PUT /api/employees
const updateEmployee = (req, res) => {
    res.status(200).json({ message: `update employee ${req.params.id}` })
}

//get employees from db
//route GET /api/employees
const deleteEmployee = (req, res) => {
    res.status(200).json({ message: `delete employee ${req.params.id}` })
}







module.exports = {
    getEmployees,
    setEmployee,
    updateEmployee,
    deleteEmployee
}