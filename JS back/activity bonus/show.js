const chalk = require('chalk');
const log = console.log
log(chalk.blue.bgYellow.bold('Hello Mout Mout!'));
log(chalk.yellow('This one is for you!!'));
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue is yours') +
	' that becomes green again is me!'
));