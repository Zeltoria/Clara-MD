import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6289516419522', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628xxx'
global.packname = 'anu - MD by'
global.author = '© Xyroinee'
global.namebot = '​anu - MD'
global.wm = '© anu By Xyroine'
global.stickpack = 'anu - MD by'
global.stickauth = '© Xyroine'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/xyroinee'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'TCM8M5H7Js'
global.rose = 'TCM8M5H7Js'
global.xyro = 'TCM8M5H7Js'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "TCM8M5H7Js",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

