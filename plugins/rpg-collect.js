let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastclaim > 43200000) {
        conn.reply(m.chat, `Kamu Sudah Mengambil Dan Mendapatkan:
Uang: Rp.1000
Potion: 1`, m)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `Silahkan Tunggu ${timers} Lagi Untuk Bisa Mengambil`, m)
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = /^(claim)$/i
handler.group = true
handler.fail = null

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}