// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name,email,id,github) {
        super(name,email,id);
        this.role = "Engineer";
        this.github = github;
    }
}
module.exports = Engineer;