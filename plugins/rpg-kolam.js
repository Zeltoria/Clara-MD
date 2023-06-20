let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
let past = `*—「 KOLAM  」—*
  
*Nama :* ${name}
*Level :* ${level}
*Exp :* ${exp}

━─┈────────┈─━
• Paus: *${paus}*   
• Kepiting: *${kepiting}*   
• Gurita: *${gurita}*   
• Cumi: *${cumi}*   
• Buntal: *${buntal}*  
• Dory: *${dory}*
• Lumba: *${lumba}*
• Lobster: *${lobster}*
• Hiu: *${hiu}*
• Udang: *${udang}*
• Ikan: *${ikan}*
• Orca: *${orca}*
`.trim()
  conn.reply(m.chat, past, m)
  }
  handler.help = ['kolam']
  handler.tags = ['rpg']
  handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
  handler.group = true
export default handler 

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
