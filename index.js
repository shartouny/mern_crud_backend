const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const EmployeesModel = require('./Models/Employees')

const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://admin:newMingiAtlassPass@cluster0.pddpl.mongodb.net/crud')



app.get('/getEmployees', (req, res)=>{
    EmployeesModel.find({})
    .then(employees=>res.json(employees))
    .catch(err=> res.json(err));
})

app.post('/createEmployee', (req, res) => {
    EmployeesModel.create(req.body)
        .then((employee) => res.json(employee))
        .catch((err) => res.json(err))
})

app.get('/getEmployee/:id', (req, res) => {
    EmployeesModel.findById(req.params.id)
    .then(emplooye => res.json(emplooye))
    .catch(err=> res.json(err));
})

app.listen(3005, ()=>{
    console.log('server is running....');
})