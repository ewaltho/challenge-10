const fs = require('fs');
const inquire = require('inquirer')
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
const generateHtml = require("./generateHtml")
const { listenerCount } = require('process');
const { default: Choices } = require('inquirer/lib/objects/choices');


inquire.prompt ([
    {
        type: 'list',
        message: 'What is your role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your Employee ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What school did you go to?',
        name: 'school',
        when: (ans) => ans.role === 'Intern'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
        when: (ans) => ans.role === "Engineer"
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
        when: (ans) => ans.role === 'Manager'
    },
    {
        type: 'list',
        message: 'Add another employee?',
        name: 'addEmployee',
        choices: ['Yes', 'No']
    }
])
.then(ans => {

    if (ans.addEmployee === 'No') {
        //generate html file based on answers given
        fs.writeFile('index.html', generateHtml(), (err) => {
            if (err) {
                console.log("error")
            } else {
                console.log('saved');
            }
        });
    } else if (ans.addEmployee === 'Yes') {
        //loop questions back to top
    }
    
})
