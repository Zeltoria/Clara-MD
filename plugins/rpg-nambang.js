let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastnambang)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers)
    let penambang = await conn.getName(m.sender)
    
    if (user.stamina < 20) return m.reply(`Stamina Kamu Tidak Cukup\nHarap Isi Stamina Kamu Dengan *${usedPrefix}eat`)
    if (user.lastnambang > 10800000) throw m.reply(`Kamu Masih Kelelahan\nHarap Tunggu ${timers} Lagi`)
    
    
    let rndm1 = `${Math.floor(Math.random() * 5)}`
		let rndm2 = `${Math.floor(Math.random() * 10)}`
		let rndm3 = `${Math.floor(Math.random() * 7)}`
		let rndm4 = `${Math.floor(Math.random() * 4)}`
		let rndm5 = `${Math.floor(Math.random() * 200)}`
		let rndm6 = `${Math.floor(Math.random() * 200)}`
		let rndm7 = `${Math.floor(Math.random() * 20)}`
		let rndm8 = `${Math.floor(Math.random() * 100)}`
		let rndm9 = `${Math.floor(Math.random() * 100)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)
let ran4 = (rndm4 * 10)
let ran5 = (rndm5 * 10)
let ran6 = (rndm6 * 10)
let ran7 = (rndm7 * 10)
let ran8 = (rndm8 * 10)
let ran9 = (rndm9 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`
let hmsil4 = `${ran4}`
let hmsil5 = `${ran5}`
let hmsil6 = `${ran6}`
let hmsil7 = `${ran7}`
let hmsil8 = `${ran8}`
let hmsil9 = `${ran9}`

let jln = `
⬛⬛⬛⬛⬛⬛⬛⬛🚶⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

✔️ ${penambang} Mohon Tunggu....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛🚶
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

➕ ${penambang} Menemukan Area....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🚶

➕ ${penambang} Mulai Menambang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🚶

➕ ${penambang}
💹 Menerima Gaji....
`

let hsl = `
*Hasil Nambang ${penambang}*

Berlian: ${hmsil1}
Iron: ${hmsil2}
Emas: ${hmsil3}
Emerald: ${hmsil4}
Batu: ${hmsil5}
Clay: ${hmsil6}
Coal: ${hmsil7}
Sand: ${hmsil8}
Exp: ${hmsil9}
 
Stamina Kamu Berkurang -20
`

user.diamond += hmsil1
		user.iron += hmsil2
		user.gold += hmsil3
		user.emerald += hmsil4
		user.rock += hmsil5
		user.clay += hmsil6
		user.coal += hmsil7
		user.sand += hmsil8
		user.exp += hmsil9
		user.stamina -= 20
		
		user.berlian += hmsil2
		user.emas += hmsil2
		user.tiketcoin += hmsil2

setTimeout(() => {
                     conn.reply(m.chat, hsl, m)
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.reply(m.chat, jln4, m)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.reply(m.chat, jln3, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.reply(m.chat, jln2, m)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.reply(m.chat, jln, m)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.reply(m.chat, `${penambang} Mencari Area Nambang.....`, m)
                     }, 0) 
  user.lastnambang = new Date * 1
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang|menambang)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}
