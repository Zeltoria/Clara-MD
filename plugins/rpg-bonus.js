let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Selamat Kak, Kamu Mendapatkan: Rp.50000', m)  
    global.db.data.users[m.sender].money += 50000
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Bilang Apa Hayoo??', m)
}
handler.help = ['hadiah']
handler.tags = ['rpg']
handler.command = /^(bonus|hadiah)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler 

