//
//base by Urus
//re-upload? recode? copy code? give credit ya :)
//Instagram: am evil0122
//Telegram: t.me/ThisIsUrus
//GitHub: @M-axie
//WhatsApp:  +254752146910
//Do not delete 
//*
//*


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: IamSaitama254" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: Ma-xie" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Kenya, Nairobi, Langata" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || 'Bride of Chucky' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '254752146910' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || 'Urus' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@IamSaitama254"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://www.instagram.com/am_evil0122"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🌚'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "Bride of Chucky"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'wa.me/254752146910' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "I am"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "Urus"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "254752146910@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["966567393013"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v2' // menu type 'v1' => 'v2'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || false //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || false //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || false //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || false //show update messages in group chat
//________________________________________________________________________________________________________
global.antidelete = false //set anti delete
//________________________________________________________________________________________________________

//msg
global.mess = {
	limit: '_*Your limit is up!*_',
	nsfw: 'Enable nsfw commands!',
    done: 'Done!',
    error: 'Error!',
    success: '_*Here you go!*_',
    owner: 'Are you Chucky?',
    group: '_*This feature becomes available when you use it in a group!"_',
    admin: '_*You’ll unlock this feature with me as an admin!*_',
    notadmin: 'Are you an admin?'
}
//thumbnail
global.thumb = fs.readFileSync('./UrusMedia/theme/Urus.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
