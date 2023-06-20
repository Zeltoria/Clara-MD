const cooldown = 28800000
let handler = async(m, { conn, text, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        lastdagang: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let user = global.db.data.users[who]
  let dapat = (Math.floor(Math.random() * 5000))
  if (!who) throw 'Tag Salah Satu Yang Kamu Ingin Ajak Berdagang Bareng'
  let ctimer = (new Date - user.lastdagang)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
  if (user.lastdagang < cooldown) {
  if (4999 > user.money) throw 'Dia Tidak Memiliki Modal Harap Masukkan Modal Minimal Rp.5000'
  if (4999 > user.money) throw 'Kamu Tidak Memiliki Modal Harap Masukkan Modal Minimal Rp.5000'
  let caption = `*BERDAGANG*\nMohon Tunggu Kak..\n@${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Sedang Berdagang..\n\n@${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Meletakkan Modal Rp.${dapat}`
  
  let _caption = `Selamat @${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Mendapatkan Uang..\n\nPenghasilan Dagang @${m.sender.split("@")[0]} Mendapatkan: Rp.5000\n${user.money += 5000}\n\nPenghasilan Dagang @${who.split("@")[0]} Mendapatkan Rp.5000\n${user.money += 5000}`
  
  let __caption = `*SUKSES*\nSelamat @${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Mendapatkan Uang..\n\nPenghasilan Dagang @${m.sender.split("@")[0]} Mendapatkan Rp.10000\n${user.money += 10000}\n\nPenghasilan Dagang @${who.split("@")[0]} Mendapatkan Rp.10000\n${user.money += 10000}`
  
  conn.reply(m.chat, caption, clockString(60000), m, { mentions: conn.parseMention(caption) })
    
					setTimeout(() => {
			conn.reply(m.chat, __caption, m, { mentions: conn.parseMention(__caption) })
		}, 10800000)

		setTimeout(() => {
			conn.reply(m.chat, _caption, clockString(10800000), m, { mentions: conn.parseMention(_caption) })
		}, 7200000)

		setTimeout(() => {
			conn.reply(m.chat, _caption, clockString(7200000), m, { mentions: conn.parseMention(_caption) })
		}, 3600000)

		setTimeout(() => {
			conn.reply(m.chat, _caption, clockString(3600000), m, { mentions: conn.parseMention(_caption) })
		}, 60000)
					user.lastdagang = new Date * 1
} else conn.reply(m.chat, `Kamu Sudah Berdagang Tunggu\n${timers} Lagi..`, m)
}
handler.help = ['berdagang']
handler.tags = ['rpg']
handler.command = /^(berdagang|dagang)$/i
handler.group = true
handler.limit = true
handler.cooldown = cooldown
export default handler 

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}