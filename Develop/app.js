const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let employeeArray = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number?"
        }
    ]).then(answers => {
        console.info(answers)
        let manager = new Manager(answers.name, answers.email, answers.id, answers.office)
        employeeArray.push(manager)
        employeePrompt()
    })
}
function employeePrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameEmployee",
            message: "What is your employees name?"
        },
        {
            //switched to input because list didn't work
            type: "input",
            name: "roleEmployee",
            message: "What is your employee's role? (Engineer), (Intern), or other?",
            choices: [
                "Engineer",
                "Intern"
            ],
        },
        {
            type: "input",
            name: "emailEmployee",
            message: "What is your employee's email?",
        },
        {
            type: "input",
            name: "idEmployee",
            message: "What is your employee's ID?"
        }]).then(answers => {
            console.info(answers)
            let name = answers.nameEmployee;
            let email = answers.emailEmployee;
            let role = answers.roleEmployee;
            let id = answers.idEmployee
            if (role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "What is your engineer's github?"
                    }
                ]).then(answer => {
                    console.info(answer)
                    let engineer = new Engineer(name, email, id, answers.github)
                    employeeArray.push(engineer)
                    inquirer.prompt([
                        {
                            name: "moreEmployees",
                            message: "Do you have more employees?",
                            choices: ["Yes", "No"]
                        }
                    ]).then(answer => {
                        if (answer.moreEmployees === "Yes") {
                            employeePrompt()
                        }
                        else {
                            console.info(employeeArray)
                            render()
                        }
                    })
                })
            }
            else if (role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "What is your intern's school"
                    }
                ]).then(answer => {
                    console.info(answer)
                    let intern = new Intern(name, email, id, answers.school)
                    employeeArray.push(intern)
                    inquirer.prompt([
                        {
                            name: "moreEmployees",
                            message: "Do you have more employees?",
                            choices: ["Yes", "No"]
                        }
                    ]).then(answer => {
                        if (answer.moreEmployees === "Yes") {
                            employeePrompt()
                        }
                        else {
                            console.info(employeeArray)
                            render()
                        }
                    })
                })
            }
            else {
                console.info("No role selected")
                let worker = new Employee(name, email, id)
                employeeArray.push(worker)
                inquirer.prompt([
                    {
                        name: "moreEmployees",
                        message: "Do you have more employees?",
                        choices: ["Yes", "No"]
                    }
                ]).then(answer => {
                    if (answer.moreEmployees === "Yes") {
                        employeePrompt()
                    }
                    else {
                        console.info(employeeArray)
                        render()
                    }

                })
            }
        });
}
managerPrompt()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
