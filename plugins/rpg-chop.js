
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastmining)
        let _timers = (180000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastmining > 180000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let diamond =  `${Math.floor(Math.random() * 10)}`.trim()
            let kayu =  `${Math.floor(Math.random() * 150)}`.trim() 
            let batu =  `${Math.floor(Math.random() * 100)}`.trim() 
            let iron = `${Math.floor(Math.random() * 100)}`.trim()
            let exp = `${Math.floor(Math.random() * 500)}`.trim() 
            let uang = `${Math.floor(Math.random() * 500)}`.trim() 
            conn.reply(m.chat, 'Menebang....', m)
            let str = `
Kamu Menebang Dan Mendapatkan:
Wood: ${kayu}
Iron: ${iron}
Gold: ${uang}
Xp: ${exp}
Dan Kamu Mendapatkan Hadiah Tambahan
Berlian: ${diamond}
`.trim()
            await conn.reply(m.chat, str, m)
            
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].batu += batu * 1
            global.db.data.users[m.sender].iron += iron * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].lastmining = new Date * 1
            } else conn.reply(m.chat, `Kamu Sudah Menebang, Tunggu Selama ${timers}`, m)
        } else conn.reply(m.chat, 'Minimal 80 Health Untuk Menebang\n*Ketik: .heal* Untuk Menggunakan Potion', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
handler.help = ['menebang']
handler.tags = ['rpg']
handler.command = /^(menebang)$/i

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}