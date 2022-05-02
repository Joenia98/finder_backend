const  Employee  = require("../models/Employees");

const resolvers = {
  Query: {
    getAllEmployees: async() => {
      const Employees = await Employee.find().sort({ first_employee: 1 });
      return Employees;
    },
    Employee_ID: async(_,{id})=>{
      const Employees = await Employee.findById(id);
      return Employees
    },
    Employee_name: async(_,{first_name})=>{
      const Employees = await Employee.find({first_name});
      return Employees
    },
    Employee_lname: async(_,{last_name})=>{
      const Employees = await Employee.find({last_name});
      return Employees
    },
    Employee_email: async(_,{email})=>{
      const Employees = await Employee.find({email});
      return Employees
    },
    Employee_nationality: async(_,{nationality})=>{
      const Employees = await Employee.find({nationality});
      return Employees;
    },
    Employee_phone: async(_,{phone})=>{
      const Employees = await Employee.find({phone});
      return Employees;
    },
    Employee_cs: async(_,{civil_status})=>{
      const Employees = await Employee.find({civil_status});
      return Employees;
    },
    Employee_birthday: async(_,{birthday})=>{
      const Employees = await Employee.find({birthday});
      return Employees;
    },
  },
  Mutation: {
    createEmployee: async(_, args) => {
      const {
        first_name,
        last_name,
        email,
        nationality,
        phone,
        civil_status,
        birthday,
      } = args.employee;

      const newEmployee = new Employee({
        first_name,
        last_name,
        email,
        nationality,
        phone,
        civil_status,
        birthday,
      });

      await newEmployee.save();
      return "Empleado Creado";
    },
    deleteEmployee: async(_,{id})=>{
      await Employee.findByIdAndDelete(id);
      return "Empleado Eliminado"
    },
    updateEmployee: async(_,{employee,id})=>{
      await Employee.findByIdAndUpdate(id,{$set:employee},{new:true})
      return "Empleado Actualizado"
    }
  },
};

module.exports = { resolvers };
