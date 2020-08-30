// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.role = "Manager"
        this.officeNumber = officeNumber;
    }
}
module.exports = Manager;