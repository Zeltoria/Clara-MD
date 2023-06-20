//ketika napsu ku jadikan bahan funngsi :'v
// heh gw gabut ajg :'v

let handler = async (m, { conn, usedPrefix }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let anjing = global.db.data.users[m.sender].anjing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
            let uang = (Math.floor(Math.random() * 400) + (anjing * 70))
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let _kayu = `${Math.floor(Math.random() * 3)}`.trim()
            let kayu = (_kayu * 1)
            let _batu = `${Math.floor(Math.random() * 2)}`.trim()
            let batu = (_batu * 1)
            let _string = `${Math.floor(Math.random() * 2)}`.trim()
            let string = (_string * 1)
            let _iron = `${Math.floor(Math.random() * 2)}`.trim()
            let iron = (_iron * 1)
            let prefix = usedPrefix
            let str = `
${rpg.emoticon('healt')} Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵 Jepang', '🇰🇷 Korea', '🇮🇳 India', '🇺🇲 Amerika', '🇵🇸 Palestin', '🇮🇶 Iraq', '🇸🇦 Arab', '🇵🇰 Pakistan', '🇩🇪 German', '🇫🇮 Finlandia', 'Ke bawa dunia mimpi 😱', 'Ujung dunia 🌏', 'Mars 👽', 'Bulan 🌚', 'Pluto 😱', 'Matahari 🌞', 'Hatinya dia ♥️', '...'])} dan mendapatkan
${rpg.emoticon('exp')} *exp:* ${exp} 
${rpg.emoticon('money')} *uang:* ${uang}
${rpg.emoticon('sampah')} *sampah:* ${sampah}${potion == 0 ? '' : `\n*${rpg.emoticon('potion')}Potion:* ` + potion + ''}${iron == 0 ? '' : `\n*${rpg.emoticon('iron')}Iron:* ` + iron + ''}${kayu == 0 ? '' : `\n*${rpg.emoticon('kayu')}Kayu:* ` + kayu + ''}${batu == 0 ? '' : `\n*${rpg.emoticon('batu')}Batu:* ` + batu + ''}${string == 0 ? '' : `\n*${rpg.emoticon('string')}String:* ` + string + ''}${diamond == 0 ? '' : `\n*${rpg.emoticon('diamond')}diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*${rpg.emoticon('common')}common crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*${rpg.emoticon('uncommon')}uncommon crate:* ` + uncommon + ''}
`.trim()
            conn.sendButton(m.chat, str, wm, null, [['menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv']], m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   conn.sendButton(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + `${rpg.emoticon('mythic')}Mythic Crate`, wm, null, [['menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv']], m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                conn.sendButton(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + `${rpg.emoticon('legendary')}Legendary Crate`, wm, null, [['menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv']], m)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].iron += iron * 1
            global.db.data.users[m.sender].batu += batu * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].string += string * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.sendButton(m.chat, `Anda sudah bekerja keras hari ini, silahkan menunggu sampai ${timers}`, wm, null, [['menu', usedPrefix + 'menu']], m)
        } else conn.sendButton(m.chat, 'Minimal 80 health untuk bisa bercocok tanam, beli obat dulu biar kuat dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', wm, null, [['Healing', usedPrefix + `heal`, 'Beli Potion', usedPrefix + `shop buy potion`]], m)
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['petualang', 'work']
handler.tags = ['rpg']
handler.command = /^(petualang|work)$/i

handler.fail = null
handler.register = false
handler.group = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
