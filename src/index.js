const CFonts = require('cfonts');
const chalk = require('chalk');
const inquirer = require('inquirer');


const logo = CFonts.render('Stripe-Gen', {
	font: 'block',
	align: 'left',
	colors: ['blueBright', 'blue'],
});

console.log(logo.string);
console.log(chalk.bgBlue('                                        '))
console.log(chalk.bgBlue('Generate fake data for stripe in no time'))
console.log(chalk.bgBlue('                                        '))

console.log(chalk.red('This project is still a Work in Progress, unexpected thing can occur 👽 use it carefully 💥'))

inquirer
  .prompt([
    {
    	type: 'input',
    	name:'todo',
    }
  ])
  .then(answers => {
    console.log(answers);
  });
