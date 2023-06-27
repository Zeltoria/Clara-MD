import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285974238938', 'shanachan', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285974238938'
global.author = '© Xyroinee'
global.namebot = '​Clara - MD'
global.wm = '© Clara By shanachan'
global.stickpack = 'Clara - MD'
global.stickauth = '© shanachan'
// Link Sosmed
global.sig = 'https://www.instagram.com/danilelistz02'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/LAWdMIQri9SKee5kqmISH0'
// Donasi
global.psaweria = 'https://saweria.co/NakanoBot'
global.ptrakterr = 'https://trakteer.id/NakanoBot'
global.povo = '0859-7423-8938'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'apikeylu'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

