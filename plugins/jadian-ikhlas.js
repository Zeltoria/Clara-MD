/*//////////////////////////////////

Cretor : Hairul Lana
https://github.com/hairullana 

/*////////////////////////////////*/

let handler = async (m, { conn }) => {
  if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `Kamu Sedang Tidak Menembak Siapapun!`, m)
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `Kamu Telah Berpacaran Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  conn.reply(m.chat, `Kamu Sudah Mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} Karena Dia Tidak Memberikan Jawaban Diterima Atau Ditolak`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  global.db.data.users[m.sender].pasangan = ""
}
handler.help = ['ikhlasin']
handler.tags = ['group']
handler.command = /^(ikhlasin|ikhlas)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.fail = null
export default handler
