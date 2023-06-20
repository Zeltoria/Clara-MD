
let handler  = async (m, { conn, command, args, usedPrefix }) => {
       let pengguna = global.db.data.users[m.sender]
       let pancingan = pengguna.pancingan
       let pemancing = await conn.getName(m.sender)
       let umpan = pengguna.umpan
       let type = (args[0] || '').toLowerCase()
       
        try {
               if (/fishing|mancing/i.test(command)) {
          switch (type) {
          
	case 'ikan':
	let __timers = (new Date - pengguna.lastfishing)
        let _timers = (240000 - __timers) 
        let timers = clockString(_timers)
        let you = conn.getName(m.sender)
        
        if (pengguna.stamina < 20) return m.reply(`Stamina Kamu Tidak Cukup\nHarap Isi Stamina Kamu Dngan *${usedPrefix}eat`)
    if (pengguna.lastfishing > 10800000) throw m.reply(`Kamu Masih Kelelahan\nHarap Tunggu *${timers}* Lagi`)
    
        if (pengguna.fishingrod > 0 ) {
        if (new Date - pengguna.lastfishing > 240000) {
        	
        
        let ikan = `${Math.floor(Math.random() * 30)}`.trim() 
        let lele = `${Math.floor(Math.random() * 15)}`.trim() 
        let nila = `${Math.floor(Math.random() * 10)}`.trim() 
        let bawal = `${Math.floor(Math.random() * 10)}`.trim() 
        let udang = `${Math.floor(Math.random() * 39)}`.trim()
        let paus = `${Math.floor(Math.random() * 2)}`.trim() 
        let kepiting = `${Math.floor(Math.random() * 27)}`.trim()
        
        
        
           let _psepick= `${pickRandom(['1', '0', '0', '1'])}`
            let psepick = (_psepick * 1)
            let _psenjata = `${pickRandom(['1', '0', '0', '0'])}`
           let psenjata = (_psenjata * 1)
           
        let mcng = `
*Hasil Mancing ${pemancing}!*
        
Nila : ${nila}
Bawal : ${bawal}
Lele : ${lele}
Ikan : ${ikan}
Udang : ${udang}
Paus: ${paus}
Kepiting: ${kepiting}

Kamu Bisa Memasak Ini, Dan Memakannya
_Contoh:_
${ usedPrefix }cook`    
        setTimeout(() => {
        conn.sendHydrated(m.chat, mcng, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
         if (psepick > 0 ) {
         	pengguna.psepick += psepick * 1
         conn.reply( m.chat, `Kamu Mendapatkan Weapon Langka ${psepick} Item`, m)
         } 
        if  (psenjata > 0 ) {
        	pengguna.psenjata+= psenjata * 1
        conn.reply(m.chat, `Kamu Mendapatkan Weapon ${psenjata} Item`, m)
        	}
        }, 38000)

        setTimeout(() => {
                     conn.reply(m.chat, `${pemancing} Sepertinya Dapat Sesuatu..`, m)
                      }, 28000)
       setTimeout(() => {
                     conn.reply(m.chat, `${pemancing} Menunggu..`, m)
                      }, 8000)
       setTimeout(() => {
                     conn.reply(m.chat, `${pemancing} Sedang Memancing...`, m)
                      }, 0)
                      
        pengguna.nila += nila * 1
         pengguna.ikan += ikan * 1
         pengguna.lele += lele * 1
         pengguna.bawal += bawal * 1
         pengguna.udang += udang * 1
         pengguna.lastfishing += new Date * 1
         pengguna.paus += paus * 1
         pengguna.kepiting += kepiting * 1

        	  } else m.reply(`Kamu Sudah Memancing, Tunggu Selama ${timers}`)
           } else return conn.reply(m.chat, `*Kamu Tidak Punya Kail Pancingan Dan Umpan 100*`, m)
           break
                       default:
                        return conn.reply(m.chat, `Contoh: .mancing ikan`, m)
                }
        }
    } catch (e) {
        conn.reply(m.chat, 'Error', m)
        console.log(e)
    }
}

handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(fishing|mancing)$/i
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