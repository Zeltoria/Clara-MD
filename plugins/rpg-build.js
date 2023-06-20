
//Harga Build
let rumahsakit = 500
let benteng = 700
let camptroops = 900
let pertanian = 700
let pertambangan = 600

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

let type = (args[0] || '').toLowerCase()
let upgrade = (args[0] || '').toLowerCase()

let user = global.db.data.users[m.sender]
let caption = `*List Bangunan*
- Benteng
- Pertanian
- Camtoop
- Pertambangan
- Rumahsakit
\nContoh: .bangun rumahsakit
`
        try {
               if (/build|bangun/i.test(command)) {
               	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
          switch (type) {
                	       case 'benteng': case 'fortress':
                if ( global.db.data.users[m.sender].batu > benteng * count ) {
                
               	global.db.data.users[m.sender].batu >= benteng * count
                	global.db.data.users[m.sender].fortress += count * 1
                    global.db.data.users[m.sender].kayu -= benteng * count
                    global.db.data.users[m.sender].batu -= benteng * count
                       m.reply(`Berhasil Membangun Benteng`)
                       } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Benteng Senilai ${benteng * count }Kayu ${benteng * count}Batu`)
                          break
                           case 'pertanian':
                           if ( user.batu > pertanian * count ) {
                	user.batu >= pertanian * count
                	user.pertanian += count * 1
                    user.kayu -= pertanian * count
                    user.batu -= pertanian * count
                       } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Pertanian Senilai ${pertanian * count }Kayu ${pertanian * count}Batu`)
                      break
                        case 'camptroops':
                        case 'camptroop':
                        case 'kamp':
                   if ( user.batu > camptroops * count ) {
                    user.batu >= camptroops * count
                    user.camptroops += count * 1
                    user.kayu -= camptroops * count
                    user.batu -= camptroops * count
                    } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Kamp Pasukan Senilai ${camptroops * count }Kayu ${camptroops * count}Batu`)
                      
                      break
                    case 'pertambangan':
                    if ( user.tambang > pertambangan * count ) {
                   user.batu >= pertambangan * count
                    user.tambang += count * 1
                    user.kayu -= pertambangan * count
                    user.batu -= pertambangan * count 
                    } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Pertanian Senilai ${pertambangan * count }Kayu ${pertambangan * count}Batu`)
                      
                       break
                    case 'rumahsakit': 
                    case 'hospital':
                    if ( user.rumahsakit > rumahsakit * count ) {
                    user.rumahsakit += count * 1
                    user.kayu -= rumahsakit * count
                    user.batu -= rumahsakit * count
                    } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Pertanian Senilai ${rumahsakit * count }Kayu ${rumahsakit * count}Batu`)
                       break

                       default:
                        return conn.reply(m.chat, caption, m)
                }
        }
    } catch (e) {
        conn.reply(m.chat, 'Error', m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}

handler.help = ['bangun', 'upgrade']
handler.tags = ['rpg']
handler.owner = false
handler.command = /^(build|bangun|upgrade|upgd)$/i
export default handler
