// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, role, email, id);
        this.role = "Manager"
        this.officeNumber = officeNumber;
    }
}