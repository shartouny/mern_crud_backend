const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    name:String, 
    family: String,
});

const EmployeesModel = mongoose.model('employees', EmployeesSchema);

module.exports = EmployeesModel;