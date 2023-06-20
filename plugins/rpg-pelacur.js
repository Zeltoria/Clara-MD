let handler = async (m, {
	conn
}) => {
	let __timers = (new Date - global.db.data.users[m.sender].lastberbru)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	let user = global.db.data.users[m.sender]
	if (new Date - global.db.data.users[m.sender].lastlont > 500000) {
		let hsl = `Kamu Terbaring Lemas Karna Melakukan Skidipapap 24 Jam Tetapi Kamu Mendapatkan:
Uang: Rp.300000
Exp: 10000
Emas: 1
Dan Gratis Boba + Nasi Padang
`
		global.db.data.users[m.sender].money += 300000
		global.db.data.users[m.sender].exp += 10000
		global.db.data.users[m.sender].gold += 3

		setTimeout(() => {
			conn.reply(m.chat, hsl, m)
		}, 20000)

		setTimeout(() => {
		    conn.reply(m.chat, `Kamu Di Paksa Untuk Melayaninya 24 Jam`, m)
		}, 18000)

		setTimeout(() => {
			conn.reply(m.chat, `Kamu Mulai Melakukan Skidipapap Dengannya`, m)
		}, 15000)

		setTimeout(() => {
			conn.reply(m.chat, `Kamu Mendapatkan Pelanggan Dan Pergi Ke Hotel`, m)
		}, 14000)

		setTimeout(() => {
			conn.reply(m.chat, `Sedang Mencari Pelanggan`, m)
		}, 0)
		user.lastlont = new Date * 1
	} else conn.reply(m.chat, `*Kamu Sudah Kecapekan*\n*Silahkan Istirahat Dulu Selama* ${timers}`, m)
}
handler.help = ['ngelont']
handler.tags = ['rpg']
handler.command = /^(ngelont)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}