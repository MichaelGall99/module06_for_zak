// By importing the model (which is basically a wrapper for the schema) into our ‘/controllers/employees.js’ file, 
// we will eventually refactor all of the following code to take advantage of all the different Mongoose commands 
// to insert data into MongoDB based on our EmployeesSchema schema.
import Employee from '../models/employee.js'

const getAllEmployees = (req, res) => {
    res.send('Get all employees')
}
const getEmployee = (req, res) => {
    res.send('Get a single employee')
}
const createEmployee = async (req, res) => {
    const employee = await Employee.create(req.body)
    res.status(201).json({employee})

    //res.send('Create a new employee') 
}
const updateEmployee = (req, res) => {
    res.send('Update an existing employee')
}
const deleteEmployee = (req, res) => {
    res.send('Delete an employee')
}
export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
