let handler = async (m, {
	command,
	usedPrefix,
	DevMode,
	args
}) => {
	let type = (args[0] || '').toLowerCase()
    let msk = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let author = global.author
let cok = `
▧ Ayambakar
〉Butuh 2 Ayam Dan 1 Coal

▧ Ayamgoreng
〉Butuh 2 Ayam Dan 1 Coal

▧ Oporayam
〉Butuh 2 Ayam Dan 1 Coal

▧ Steak
〉Butuh 2 Sapi Dan 1 Coal

▧ Rendang
〉Butuh 2 Sapi Dan 1 Coal

▧ Gulaiayam
〉Butuh 2 Ayam Dan 1 Coal

▧ Babipanggang
〉Butuh 2 Babi Dan 1 Coal

▧ Ikanbakar
〉Butuh 2 Ikan Dan 1 Coal

▧ Lelebakar
〉Butuh 2 Lele Dan 1 Coal

▧ Nilabakar
〉Butuh 2 Nila Dan 1 Coal 

▧ Bawalbakar
〉Butuh 2 Bawal Dan 1 Coal

▧ Uadangbakar
〉Butuh 2 Udang Dan 1 Coal

▧ Pausbakar
〉Butuh 2 Paus Dan 1 Coal

▧ Kepitingbakar
〉Butuh 2 Kepiting Danc1 Coal
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayambakar':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayambakar += count * 1
                            conn.reply(m.chat, `Sukses Memasak ${count} Ayam Bakar`, m)
                       } else conn.reply(m.chat, `Kamu Tidak Memiliki Bahan Untuk Memasak Ayam Bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				  case 'gulaiayam':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                            user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.gulai += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                  case 'rendang':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.rendang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
                   case 'ayamgoreng':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayamgoreng += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng🍗`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'oporayam':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                          user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.oporayam += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'steak':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.steak += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
				break
             case 'babipanggang':
            if (user.babi < count * 2 || user.coal < 1 * count) {
                            user.babi >= count * 1
                            user.babi -= count * 2
                            user.coal -= count * 1
                            user.babipanggang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
				break
				case 'ikanbakar':
            if (user.ikan < count * 2 || user.coal < 1 * count) {
                           user.ikan >= count * 1
                            user.ikan -= count * 2
                            user.coal -= count * 1
                            user.ikanbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ikan bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ikan bakar\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
					break
					case 'lelebakar':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                           user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.lelebakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} lele bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak lele bakar\nAnda butuh 2 lele dan 1 coal untuk memasak`, m)
					break
					case 'nilabakar':
            if (user.nila < count * 2 || user.coal < 1 * count) {
                           user.nila >= count * 1
                            user.nila -= count * 2
                            user.coal -= count * 1
                            user.nilabakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} nila bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak nila bakar\nAnda butuh 2 nila dan 1 coal untuk memasak`, m)
					break
					case 'bawalbakar':
            if (user.bawal < count * 2 || user.coal < 1 * count) {
                           user.bawal >= count * 1
                            user.bawal -= count * 2
                            user.coal -= count * 1
                            user.bawalbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} bawal bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak bawal bakar\nAnda butuh 2 bawal dan 1 coal untuk memasak`, m)
					break
					case 'udangbakar':
            if (user.udang < count * 2 || user.coal < 1 * count) {
                           user.udang >= count * 1
                            user.udang -= count * 2
                            user.coal -= count * 1
                            user.udangbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} udang bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak udang bakar\nAnda butuh 2 udang dan 1 coal untuk memasak`, m)
					break
					case 'pausbakar':
            if (user.paus < count * 2 || user.coal < 1 * count) {
                           user.paus >= count * 1
                            user.paus -= count * 2
                            user.coal -= count * 1
                            user.pausbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} paus bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak paus bakar\nAnda butuh 2 paus dan 1 coal untuk memasak`, m)
					break
					case 'kepitingbakar':
            if (user.kepiting < count * 2 || user.coal < 1 * count) {
                           user.kepiting >= count * 1
                            user.kepiting -= count * 2
                            user.coal -= count * 1
                            user.kepitingbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} kepiting bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kepiting bakar\nAnda butuh 2 kepiting dan 1 coal untuk memasak`, m)
					break
                default:
                await conn.reply(m.chat, cok, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya Ada Yg Eror,Coba Laporin Ke Owner Deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i
handler.group = true
export default handler