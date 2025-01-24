const { response } = require('express');
const Employee = require('../models/employee.model')


//create new employees 

exports.createEmp = async (req,res) => {
    console.log(req.body)
    console.log("testing" ,req.method);
    console.log("new console added for generate conflict");
     const newEmployee = new Employee(req.body);
     const saveEmp = await newEmployee.save();
     res.status(201).send(saveEmp)
    }


// getall emp 

exports.getEmp = async (req,res) => {
    const employee = await Employee.find();
    res.send(employee)
}

//get emp by id

exports.employeeById = async (req, res) => {
    const { id } = req.params;
    const response = await Employee.findById(id);
    res.json(response);
}


//update
exports.updateEmpId = async (req,res) => {
    const _id = req.params.id;
    const updateEmp = await Employee.findByIdAndUpdate(_id, req.body, {
            new : true
    });
    res.send(updateEmp)
}

//delete

exports.deleteEmpId = async (req,res) => {
    const  _id = req.params.id
    const deleteEmp = await Employee.findByIdAndDelete( _id);
    res.send(deleteEmp)
}




