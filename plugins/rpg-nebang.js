let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastlumber)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    let penebang = await conn.getName(m.sender)
    
    if (user.stamina < 20) return m.reply(`Stamina Kamu Tidak Cukup\nHarap Isi Stamina Kamu Dengan *${usedPrefix}eat`)
    if (user.lastlumber > 10800000) throw m.reply(`Kamu Masih Kelelahan\nHarap Tunggu ${timers} Lagi`)
    
    let rndm1 = `${Math.floor(Math.random() * 300)}`
		let rndm2 = `${Math.floor(Math.random() * 3000)}`
		let rndm3 = `${Math.floor(Math.random() * 300)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`

let jln = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

${penebang} 
Mencari Area....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

${penebang} 
Hampir Sampai....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛🚶
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

${penebang} 
Mulai Menebang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️ 🏘️ 🚶

${penebang}
Menerima Hasil....
`

let hsl = `
*Hasil Nebang ${penebang}*

Kayu: ${hmsil1}
Uang: ${hmsil2}
Exp: ${hmsil3}
 
 Stamina Kamu Berkurang -20
`

user.axedurability -= 5
user.stamina -= 20
user.money += hmsil2
user.kayu += hmsil1
user.exp += hmsil3
	
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
                     conn.reply(m.chat, `${penebang} Mencari Area Nebang.....`, m)
                     }, 0) 
  user.lastlumber = new Date * 1
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang|menebang)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}
