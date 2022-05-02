const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Employee{
    id:ID
    first_name: String
    last_name: String
    email: String
    nationality: String
    phone: String
    civil_status: String
    birthday:String
}

type Query{
    getAllEmployees:[Employee]
    Employee_ID(id:ID):Employee
    Employee_name(first_name:String):[Employee]
    Employee_lname(last_name:String):[Employee]
    Employee_email(email:String):[Employee]
    Employee_nationality(nationality:String):[Employee]
    Employee_phone(phone:String):[Employee]
    Employee_cs(civil_status:String):[Employee]
    Employee_birthday(birthday:String):[Employee]
}

input EmployeeCreate{
    first_name: String
    last_name: String
    email: String
    nationality: String
    phone: String
    civil_status: String
    birthday:String
}

input EmployeeUpdate{
    first_name: String
    last_name: String
    email: String
    phone: String
}

type Mutation{
    createEmployee(employee: EmployeeCreate):String
    deleteEmployee(id:ID!):String
    updateEmployee(id: ID!,employee:EmployeeUpdate):String
}
`;
module.exports = { typeDefs };
