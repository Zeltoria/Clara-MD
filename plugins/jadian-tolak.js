import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan Nomor, Tag Atau Balas Pesannya.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Nomor Yang Kamu Masukan Salah!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format Salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Doi Atau Nomor Tidak Ditemukan, Mungkin Sudah Keluar Atau Bukan Anggota Grup Ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak Bisa Menolak Dengan Diri Sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*Lah Lu Siapa?*`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat,`Maaf @${user.split('@')[0]} Tidak Sedang Menembak Kamu`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasangan = ""
      conn.reply(m.chat,`Kamu Baru Saja Menolak @${user.split('@')[0]} Untuk Menjadi Pasangan Kamu!`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolak']
handler.tags = ['group']
handler.command = /^(tolak)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = false
handler.fail = null
export default handler
