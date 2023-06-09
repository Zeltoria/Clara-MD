let handler = async (m, { conn, usedPrefix, owner }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (3600000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].health > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 3600000) {
            let armor = global.db.data.users[m.sender].armor
            let fox = global.db.data.users[m.sender].fox
            let cat = global.db.data.users[m.sender].cat
            let dog = global.db.data.users[m.sender].dog
            let horse = global.db.data.users[m.sender].horse
            let _health = `${Math.floor(Math.random() * 101)}`.trim()
            let health = (_health * 1)
            let exp = `${Math.floor(Math.random() * 10000)}`.trim() 
            let uang = `${Math.floor(Math.random() * 100000)}`.trim() 
            let trash = `${Math.floor(Math.random() * 10000)}`.trim() 
            let emerald = `${Math.floor(Math.random() * 100)}`.trim() 
            let _potion = ['1','2','3']
            let potion = _potion[Math.floor(Math.random() * _potion.length)]
            let _sampah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
            let sampah = _sampah[Math.floor(Math.random() * _sampah.length)]
            let _diamond = ['1','2','3','4','5','6','7','8','9','10']
            let diamond = _diamond[Math.floor(Math.random() * _diamond.length)]
            let _common = ['1','2','3']
            let common = _common[Math.floor(Math.random() * _common.length)]
            let _uncommon = ['1','2','1','2']
            let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)]
            let _mythic = `${pickRandom(['1','3','1','1','2'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1','3','1','1','2'])}`
            let legendary = (_legendary * 1)
            let itemrand = [`*${mythic} Peti Mistis Langka*`,`*${legendary} Peti Legendary Langka*`]
            let rendem = itemrand[Math.floor(Math.random() * itemrand.length)]
            let str = `
Nyawa Mu Berkurang Sebesar -${health * 1}, Karena Kamu Berpetualang Dan Melawan ${pickRandom(['Raksasa', 'Beruang', 'Harimau', 'Macan', 'Iblis'])} Tapi Kamu Mendapatkan:
*Exp Sebesar:* ${exp} 
*Uang Sebesar:* ${uang}
*Berlian Sebesar:* ${diamond}
*Emerald Sebesar:* ${emerald}
*Sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*Diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*Common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*Uncommon crate:* ' + uncommon + ''}
Dan Mendapatkan ${itemrand}
`.trim()
            
            setTimeout(() => {
                  conn.sendMessage(m.chat, { image: { url: 'https://c4.wallpaperflare.com/wallpaper/755/258/362/action-adventure-anime-chronicles-wallpaper-preview.jpg' }, caption: str }, { quoted: m })
                  }, 0)
					
            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].emerald += emerald * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].trash += trash * 1
            global.db.data.users[m.sender].mythic += mythic * 1
            global.db.data.users[m.sender].legendary += legendary * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Kamu Sudah Berpetualang Hari Ini, Dan Kamu Membutuhkan Istirahat Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Minimal 80 Health Untuk Bisa Berpetualang\nKamu Bisa Menggunakan Potion Dengan Cara *.heal*\nJika Tidak Mempunyai Potion Kamu Bisa Beli Dengan Cara *.buy potion (jumlah)*', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}

handler.help = ['petualang']
handler.tags = ['rpg']
handler.command = /^(petualang|adventure)$/i
handler.group = true
handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}