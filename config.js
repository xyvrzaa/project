const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' //https://api.lolhuman.xyz
global.rosekey = 'Rk-CT9MVBCNDD7B_Trial' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'RzXWv Bot'
global.namaowner = 'Rお'

//—————「 Setting Owner 」—————//
global.owner = '6281292382985'
global.ownernomer = ["6281292382985"]
global.premium = ['6281292382985']

//—————「 Set Wm 」—————//
global.packname = 'RioBot'
global.author = 'Tex4su'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/0b977303a3b4a2df9a3fb.jpg'
global.isLink = `https://youtube.com/@SanZxyz1`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
