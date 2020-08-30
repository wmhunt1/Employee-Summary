// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(school) {
        super(name,role,email,id);
        this.role = "Intern"
        this.school = school;
    }
}