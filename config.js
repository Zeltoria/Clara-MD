import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285760451683', 'Zeltoria', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285760451683'
global.author = '© Xyroinee'
global.namebot = '​Clara - MD'
global.wm = '© Xyroinee'
global.stickpack = 'Clara - MD'
global.stickauth = '© Xyroinee'
// Link Sosmed
global.sig = 'https://www.instagram.com/danilelistz02'
global.sgh = 'https://github.com/Zeltoria'
global.sgc = 'https://chat.whatsapp.com/Csjk910wJyt0ZTQGidpVUS'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
// Note: Jika Tidak Punya Apikey Kalian Harus
// Daftar Ke Website Tersebut Yang Ada Di Bawah
global.xyro = 'Apikeymu'
global.xcode = 'Apikeymu'
global.APIs = {
  xcoders : 'https://api-xcoders.site',
  xyro: 'https://api.xyroinee.xyz'
}

global.APIKeys = { 
  'https://api-xcoders.site': 'Apikeymu',
  'https://api.xyroinee.xyz': 'Apikeymu'
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
