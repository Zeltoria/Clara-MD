
let handler = async (m, { conn }) => {
  var ayg = global.db.data.users[m.sender]
  var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`Kamu Tdak Memiliki Pasangan.`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil Putus Hubungan Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`Berhasil Putus Hubungan Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`Kamu Tidak Memiliki Pasangan.`,m)
  }
}
handler.help = ['putus']
handler.tags = ['group']
handler.command = /^(putus)$/i
handler.group = true
handler.fail = null
export default handler
