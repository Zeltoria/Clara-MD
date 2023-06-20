let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor Yang Kamu Masukan Salah!`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang Yang Kamu Tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "Orang Yang Kamu Balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang Yang Kamu Tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("Nomor Tdak Terdaftar Di Dalam Database!")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("Nomor Tidak Terdaftar Di Dalam Database!")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `${orang} Tidak Memiliki Pasangan Dan Tidak Sedang Menembak Siapapun\n\n*Ketik .tembak @user Untuk Menembak Seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `${orang} Sedang Menunggu Jawaban Tidak Pasti Dari @${global.db.data.users[user].pasangan.split('@')[0]} Karena Sedang Tidak Diterima Atau Di Tolak\n\nKetik *${usedPrefix}ikhlasin* Untuk Mengikhlaskan!`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `${orang} Sedang Menjalani Hubungan Dengan @${global.db.data.users[user].pasangan.split('@')[0]} 💓💓💓`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['group']
handler.command = /^(cekpacar)$/i
handler.group = true
export default handler
