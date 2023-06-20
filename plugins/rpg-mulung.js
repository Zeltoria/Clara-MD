
const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Kamu Sudah Lelah Untuk Mulung\nTunggu Selama ${msToTime(time - new Date())} Lagi`
	let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	global.db.data.users[m.sender].botol += botolnye * 1
	global.db.data.users[m.sender].kaleng += kalengnye * 1
	global.db.data.users[m.sender].kardus += kardusnye * 1
	global.db.data.users[m.sender].lastmulung = new Date * 1
  m.reply(`Selamat Kamu Mendapatkan : \nBotol: ${botolnye}\nKardus: ${kardusnye}\nKaleng: ${kalengnye}`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk Waktunya Mulung Lagi 😅`, m)
					}, timeout)
}
handler.help = ['mulung']
handler.tags = ['rpg']
handler.command = /^(mulung)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}