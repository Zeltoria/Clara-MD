import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastbansos > 200000) {
      if (Aku > Kamu) {
        conn.reply(m.chat, `Kamu Tertangkap Setelah Kamu Korupsi Dana Rakyat, Dan Kamu Harus Membayar Denda Sebesar Rp.5000000 Agar Bisa Terbebas Dari Penjara`, m)
        user.money -= 5000000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 2000000
        conn.reply(m.chat, `Kamu Berhasil Korupsi Dana Rakyat,  Dan Kamu Mendapatkan Rp.2000000`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.reply(m.chat, `Waduh Kak Kamu Tidak Berhasil Melakukan Korupsi Dan Tidak Masuk Penjara Karna Kamu *Menyuap Pihak Tertentu*`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.reply(m.chat, `Kamu Sudah Melakukan Korupsi Keuangan\nDan Kamu Harus Menunggu Selama ${timers} Agar Tidak Tertangkap Oleh KPK`, m)
  } catch (e) {
    throw `Kok erorr`
  }
}

handler.help = ['korupsi']
handler.tags = ['rpg']
handler.command = /^(korupsi)$/i
handler.group = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}