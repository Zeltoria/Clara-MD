import { WAProto } from '@adiwajshing/baileys'

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`
    if (!text) throw `Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `${text} telah terdaftar!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (global.db.data.chats[m.chat].getmsg) return m.reply(`Berhasil menambahkan pesan ${text}
    
Akses dengan mengetik namanya`.trim())
    else return m.reply(`Berhasil menambahkan pesan ${text}
    
akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['addvn', 'addmsg', 'addvideo', 'addaudio', 'addimg', 'addstiker', 'addgif']
handler.tags = ['tools']
handler.command = /^add(vn|msg|video|audio|img|stic?ker|gif)$/

export default handler