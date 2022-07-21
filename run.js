const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./utils/Manager");
const Engineer = require("./utils/Engineer");
const Intern = require("./utils/Intern");
// const Employee = require("./Employee");
// const render = require("./htmlRenderer");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the Manager?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the id of the Manager?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the email of the Manager?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the office number of the Manager?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the Engineer?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the id of the Engineer?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the email of the Engineer?",
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is the GitHub username of the Engineer?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of the Intern?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the id of the Intern?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the email of the Intern?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the school of the Intern?",
  },
];

const selectQuestions = [
  {
    type: "list",
    name: "addTeamMember",
    message: "What team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];



const questions = () => {
  inquirer.prompt(selectQuestions).then((selectAnswers) => {
    if (selectAnswers.addTeamMember === "Engineer") {
      inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        new Engineer(
          engineerAnswers.engineerName,
          engineerAnswers.engineerId,
          engineerAnswers.engineerEmail,
          engineerAnswers.engineerGitHub
        );
        const engineerString = JSON.stringify(engineerAnswers);
        fs.appendFile("./employees.json", `
        ${engineerString},
        
        `,(err) => {
          err ? console.log(err) : console.log("Engineer Created!")
        });
        questions();
      });
    } else if (selectAnswers.addTeamMember === "Intern") {
      inquirer.prompt(internQuestions).then((internAnswers) => {
        new Intern(
          internAnswers.internName,
          internAnswers.internId,
          internAnswers.internEmail,
          internAnswers.internSchool
        );
        const internString = JSON.stringify(internAnswers);
        fs.appendFile("./employees.json", `
        ${internString},
        `, (err) => {
          err ? console.log(err) : console.log("Intern Created!")
        });
        questions();
      });
    } else {
      fs.appendFile("./employees.json", `{}]`, (err) => {
        err ? console.log(err) : console.log("Team Complete!")
      });
      return;
    }
  });

}


(() => {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    new Manager(
      managerAnswers.managerName,
      managerAnswers.managerId,
      managerAnswers.managerEmail,
      managerAnswers.managerOfficeNumber
    );
    const managerString = JSON.stringify(managerAnswers);
    fs.writeFile('./employees.json', `[
    ${managerString},
    `, (err) => {
      err ? console.log(err) : console.log("Manager Created!")
    });
    questions();
  });
})();

// const newGuy = new Engineer(Andrew, 47, blah@me.com, andrew87e)
// newGuy.getRole()
// newGuy.getGithub()
