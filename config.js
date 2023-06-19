import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285760451683', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info 
global.nomorwa = '6285760451683'
global.author = '© Xyroine'
global.stickpack = 'Clara - MD'
global.stickauth = '© Xyroine'
global.packname = 'Clara - MD'
global.namebot = '​Clara - MD'
global.wm = 'Clara by Xyroine'
// Message
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
// Level Rpg
global.multiplier = 69 
// Apikey
global.xcode = 'Apikeylu'
global.xyro = 'Apikeylu'
// Note: Jika Tidak Punya Apikey Silahkan Daftar Ke Website Ini
// Xyro: https://api.xyroinee.xyz
// Xcode: https://api-xcoders.site

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
