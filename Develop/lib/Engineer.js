// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(github) {
        super(name,role,email,id);
        this.role = "Engineer";
        this.github = github;
    }
}