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
global.author = '© Zeltoria'
global.namebot = '​Clara - MD'
global.wm = '© Clara By Zeltoria'
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
global.openai = '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' 
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu'
global.rose = 'Rs-bangsat'
global.zeltoria = 'Elistz'
global.ibeng = 'APIKEY'
global.xcode = 'Frieren'
global.APIs = {
  rose: 'https://api.itsrose.site',
  xcoders : 'https://api-xcoders.site',
  zeltoria: 'https://api.zeltoria.my.id'
}

global.APIKeys = { 
  'https://api.itsrose.site': 'Rs-bangsat',
  'https://api-xcoders.site': 'Frieren',
  'https://api.zeltoria.my.id': 'Elistz'
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
