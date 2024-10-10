//base by Urus
//re-upload? recode? copy code? give credit ya :)
//Instagram: am evil0122
//Telegram: t.me/ThisIsUrus
//GitHub: @M-axie
//WhatsApp:  +254752146910
//Do not delete 

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
