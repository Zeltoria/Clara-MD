let handler = async (m, {
	conn
}) => {
	let __timers = (new Date - global.db.data.users[m.sender].lastberbru)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	let user = global.db.data.users[m.sender]
	if (new Date - global.db.data.users[m.sender].lastberbru > 500000) {
		let randomaku1 = `${Math.floor(Math.random() * 10)}`
		let randomaku2 = `${Math.floor(Math.random() * 10)}`
		let randomaku4 = `${Math.floor(Math.random() * 10)}`
		let randomaku3 = `${Math.floor(Math.random() * 10)}`
		let randomaku5 = `${Math.floor(Math.random() * 10)}`
		let randomaku6 = `${Math.floor(Math.random() * 10)}`
		let randomaku7 = `${Math.floor(Math.random() * 10)}`
		let randomaku8 = `${Math.floor(Math.random() * 10)}`
		let randomaku9 = `${Math.floor(Math.random() * 10)}`
		let randomaku10 = `${Math.floor(Math.random() * 10)}`
		let randomaku11 = `${Math.floor(Math.random() * 10)}`
		let randomaku12 = `${Math.floor(Math.random() * 10)}`
			.trim()

		let rbrb1 = (randomaku1 * 1)
		let rbrb2 = (randomaku2 * 1)
		let rbrb3 = (randomaku3 * 1)
		let rbrb4 = (randomaku4 * 1)
		let rbrb5 = (randomaku5 * 1)
		let rbrb6 = (randomaku6 * 1)
		let rbrb7 = (randomaku7 * 1)
		let rbrb8 = (randomaku8 * 1)
		let rbrb9 = (randomaku9 * 1)
		let rbrb10 = (randomaku10 * 1)
		let rbrb11 = (randomaku11 * 1)
		let rbrb12 = (randomaku12 * 1)

		let anti1 = `${rbrb1}`
		let anti2 = `${rbrb2}`
		let anti3 = `${rbrb3}`
		let anti4 = `${rbrb4}`
		let anti5 = `${rbrb5}`
		let anti6 = `${rbrb6}`
		let anti7 = `${rbrb7}`
		let anti8 = `${rbrb8}`
	    let anti9 = `${rbrb9}`
		let anti10 = `${rbrb10}`
		let anti11 = `${rbrb11}`
		let anti12 = `${rbrb12}`

		let hsl = `Hasil Berburu

 🐂 > ${anti1} 		     	 🐃 > ${anti7}
 🐅 > ${anti2}    		     🐮 > ${anti8}
 🐘 > ${anti3} 			     🐒 > ${anti9}
 🐐 > ${anti4}			     🐗 > ${anti10}
 🐼 > ${anti5} 			     🐖 > ${anti11}
 🐊 > ${anti6}		         🐓 > ${anti12}

*Ketik: .kandang Untuk Melihat Hasilnya*
`
		global.db.data.users[m.sender].banteng += rbrb1
		global.db.data.users[m.sender].harimau += rbrb2
		global.db.data.users[m.sender].gajah += rbrb3
		global.db.data.users[m.sender].kambing += rbrb4
		global.db.data.users[m.sender].panda += rbrb5
		global.db.data.users[m.sender].buaya += rbrb6
		global.db.data.users[m.sender].kerbau += rbrb7
		global.db.data.users[m.sender].sapi += rbrb8
		global.db.data.users[m.sender].monyet += rbrb9
		global.db.data.users[m.sender].babihutan += rbrb10
		global.db.data.users[m.sender].babi += rbrb11
		global.db.data.users[m.sender].ayam += rbrb12

		setTimeout(() => {
			conn.reply(m.chat, hsl, m)
		}, 20000)

		setTimeout(() => {
			conn.reply(m.chat `Nah Ini Dia...\n\nKamu Menang Adu Mekanik, Walau Buruanmu Menggunakan Immortal :v`, m)
		}, 18000)

		setTimeout(() => {
			conn.reply(m.chat, `Duarrrr M*m*k, Kamu Adu Mekanik Dengan Buruanmu Di Exp Lane`, m)
		}, 15000)

		setTimeout(() => {
			conn.reply(m.chat, `Kamu Mendapatkan Mangsa Dan Menunggu Waktu Yang Tepat Untuk Memangsa`, m)
		}, 14000)

		setTimeout(() => {
			conn.reply(m.chat `Sedang Mencari Mangsa..`, m)
		}, 0)
		user.lastberburu = new Date * 1
	} else conn.reply(m.chat, `*Sepertinya Kamu Sudah Kecapekan*\n*Silahkan Istirahat Dulu Selama* ${timers}`, m)
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}