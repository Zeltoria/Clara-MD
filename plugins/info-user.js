import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Database Saat Ini ${totalreg} User*\n*Terdaftar Saat Ini ${rtotalreg} User*`
    await m.reply(kon)
}
handler.help = ['user']
handler.tags = ['main']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

export default handler
