
const Bhiu = 1500
const Shiu = 400
const Bikan = 500
const Sikan = 50
const Bdory = 800
const Sdory = 200
const Borca = 1500
const Sorca = 400
const Bpaus = 2000
const Spaus = 900
const Bcumi = 1400
const Scumi = 300
const Bgurita = 1600
const Sgurita = 500
const Bbuntal = 700
const Sbuntal = 100
const Budang = 500
const Sudang = 50
const Blumba = 1500
const Slumba = 400
const Blobster = 800
const Slobster = 200
const Bkepiting = 700
const Skepiting = 150
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `
*List Harga Beli Ikan*

Hiu: Rp.${Bhiu}
Ikan: Rp.${Bikan}
Dory: Rp.${Bdory}
Orca: Rp.${Borca}
Paus: Rp.${Bpaus}
Cumi: Rp.${Bcumi}
Gurita: Rp.${Bgurita}
Buntal: Rp.${Bbuntal}
Udang: Rp.${Budang}
Lumba²: Rp.${Blumba}
Lobster: Rp.${Blobster}
Kepiting: Rp.${Bkepiting}


*List Harga Jual Ikan*
Hiu: Rp.${Shiu}
Ikan: Rp.${Sikan}
Dory: Rp.${Sdory}
Orca: Rp.${Sorca}
Paus: Rp.${Spaus}
Cumi: Rp.${Scumi}
Gurita: Rp.${Sgurita}
Buntal: Rp.${Sbuntal}
Udang: Rp.${Sudang}
Lumba²: Rp.${Slumba}
Lobster: Rp.${Slobster}
Kepiting: Rp.${Skepiting}

*Untuk Membeli*
_Contoh: .tokoikan beli udang_

*Untuk Menjual*
_Contoh: .tokoikan jual udang_
`.trim()

    try {
        if (/tokoikan/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'beli':
                switch (_type) {
                    case 'hiu':
                            if (global.db.data.users[m.sender].money >= Bhiu * count) {
                                global.db.data.users[m.sender].hiu += count * 1
                                global.db.data.users[m.sender].money -= Bhiu * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Hiu Dengan Harga Rp.${Bhiu * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'ikan':
                            if (global.db.data.users[m.sender].money >= Bikan * count) {
                                global.db.data.users[m.sender].ikan += count * 1
                                global.db.data.users[m.sender].money -= Bikan * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Ikan Dengan Harga Rp.${Bikan * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'dory':
                            if (global.db.data.users[m.sender].money >= Bdory * count) {
                                global.db.data.users[m.sender].dory += count * 1
                                global.db.data.users[m.sender].money -= Bdory * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Dory Dengan Harga Rp.${Bdory * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'orca':
                            if (global.db.data.users[m.sender].money >= Borca * count) {
                                global.db.data.users[m.sender].orca += count * 1
                                global.db.data.users[m.sender].money -= Borca * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Orca Dengan Harga Rp.${Borca * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'paus':
                            if (global.db.data.users[m.sender].money >= Bpaus * count) {
                                global.db.data.users[m.sender].paus += count * 1
                                global.db.data.users[m.sender].money -= Bpaus * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Paus Dengan Harga Rp.${Bpaus * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'cumi':
                            if (global.db.data.users[m.sender].money >= Bcumi * count) {
                                global.db.data.users[m.sender].cumi += count * 1
                                global.db.data.users[m.sender].money -= Bcumi * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Cumi Dengan Harga Rp.${Bcumi * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'gurita':
                            if (global.db.data.users[m.sender].money >= Bgurita * count) {
                                global.db.data.users[m.sender].gurita += count * 1
                                global.db.data.users[m.sender].money -= Bgurita * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Gurita Dengan Harga ${Bgurita * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'buntal':
                            if (global.db.data.users[m.sender].money >= Bbuntal * count) {
                                global.db.data.users[m.sender].buntal += count * 1
                                global.db.data.users[m.sender].money -= Bbuntal * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Buntal Dengan Harga ${Bbuntal * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'udang':
                            if (global.db.data.users[m.sender].money >= Budang * count) {
                                global.db.data.users[m.sender].udang += count * 1
                                global.db.data.users[m.sender].money -= Budang * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Udang Dengan Harga Rp.${Budang * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'lumba':
                            if (global.db.data.users[m.sender].money >= Blumba * count) {
                                global.db.data.users[m.sender].lumba += count * 1
                                global.db.data.users[m.sender].money -= Blumba * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Lumba² Dengan Harga Rp.${Blumba * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'lobster':
                            if (global.db.data.users[m.sender].money >= Blobster * count) {
                                global.db.data.users[m.sender].lobster += count * 1
                                global.db.data.users[m.sender].money -= Blobster * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Lobster Dengan Harga Rp.${Blobster * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
                    case 'kepiting':
                            if (global.db.data.users[m.sender].money >= Bkepiting * count) {
                                global.db.data.users[m.sender].kepiting += count * 1
                                global.db.data.users[m.sender].money -= Bkepiting * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Kepiting Dengan Harga Rp.${Bkepiting * count}`, m)
                            } else conn.reply(m.chat, `Uang Tidak Cukup`.trim(), m)
                        
                    break
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
             break
            case 'jual': 
                switch (_type) {
                    case 'hiu':
                        if (global.db.data.users[m.sender].hiu >= count * 1) {
                            global.db.data.users[m.sender].hiu -= count * 1
                            global.db.data.users[m.sender].money += Shiu * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu, Dan Kamu Mendapatkan Rp.${Shiu * count}`, m)
                        } else conn.reply(m.chat, `Hiu Tiak Cukup`, m)
                        break
                    case 'ikan':
                        if (global.db.data.users[m.sender].ikan >= count * 1) {
                            global.db.data.users[m.sender].ikan -= count * 1
                            global.db.data.users[m.sender].money += Sikan * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan, Dan Kamu Mendapatkan Rp.${Sikan * count}`, m)
                        } else conn.reply(m.chat, `Ikan Kamu Tidak Cukup`, m)
                        break
                    case 'dory':
                        if (global.db.data.users[m.sender].dory >= count * 1) {
                            global.db.data.users[m.sender].dory -= count * 1
                            global.db.data.users[m.sender].money += Sdory * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Dory, Dan Kamu Mendapatkan Rp.${Sdory * count}`, m)
                        } else conn.reply(m.chat, `Dory Tidak Cukup`, m)
                        break
                    case 'orca':
                        if (global.db.data.users[m.sender].orca >= count * 1) {
                            global.db.data.users[m.sender].orca -= count * 1
                            global.db.data.users[m.sender].money += Sorca * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Orca, Dan Kamu Mendapatkan Rp.${Sorca * count}`, m)
                        } else conn.reply(m.chat, `Orca Tiidak Cukup`, m)
                        break
                    case 'paus':
                        if (global.db.data.users[m.sender].paus >= count * 1) {
                            global.db.data.users[m.sender].paus -= count * 1
                            global.db.data.users[m.sender].money += Spaus * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus, Dan Kamu Mendapatkan Rp.${Spaus * count}`, m)
                        } else conn.reply(m.chat, `Paus Tidak Cukup`, m)
                        break
                    case 'cumi':
                        if (global.db.data.users[m.sender].cumi >= count * 1) {
                            global.db.data.users[m.sender].cumi -= count * 1
                            global.db.data.users[m.sender].money += Scumi * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi, Dan Kamu Mendapatkan Rp.${Scumi * count}`, m)
                        } else conn.reply(m.chat, `Cumi Tidak Cukup`, m)
                        break
                    case 'gurita':
                        if (global.db.data.users[m.sender].gurita >= count * 1) {
                            global.db.data.users[m.sender].gurita -= count * 1
                            global.db.data.users[m.sender].money += Sgurita * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita, Dan Kamu Mendapatkan Rp.${Sgurita * count}`, m)
                        } else conn.reply(m.chat, `Hiu Tidak Cukup`, m)
                        break
                    case 'buntal':
                        if (global.db.data.users[m.sender].buntal >= count * 1) {
                            global.db.data.users[m.sender].buntal -= count * 1
                            global.db.data.users[m.sender].money += Sbuntal * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Buntal, Dan Kamu Mendapatkan Rp.${Sbuntal * count}`, m)
                        } else conn.reply(m.chat, `Buntal Tidak Cukup`, m)
                        break
                    case 'udang':
                        if (global.db.data.users[m.sender].udang >= count * 1) {
                            global.db.data.users[m.sender].udang -= count * 1
                            global.db.data.users[m.sender].money += Sudang * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang, Dan Kamu Mendapatkan Rp.${Sudang * count}`, m)
                        } else conn.reply(m.chat, `Udang Tidak Cukup`, m)
                        break
                    case 'lumba':
                        if (global.db.data.users[m.sender].lumba >= count * 1) {
                            global.db.data.users[m.sender].lumba -= count * 1
                            global.db.data.users[m.sender].money += Slumba * count
                            conn.reply(m.chat, `Suksee Menjual ${count} Lumba², Dan Kamu Mendapatkan Rp.${Slumba * count}`, m)
                        } else conn.reply(m.chat, `Lumba² Tidak Cukup`, m)
                        break
                    case 'lobster':
                        if (global.db.data.users[m.sender].lobster >= count * 1) {
                            global.db.data.users[m.sender].lobster -= count * 1
                            global.db.data.users[m.sender].money += Slobster * count
                            conn.reply(m.chat, `Suksee Menjual ${count} Lobster, Dan Kamu Mendapatkan Rp.${Slobster * count}`, m)
                        } else conn.reply(m.chat, `Lobster Tiidak Cukup`, m)
                        break
                    case 'kepiting':
                        if (global.db.data.users[m.sender].kepiting >= count * 1) {
                            global.db.data.users[m.sender].kepiting -= count * 1
                            global.db.data.users[m.sender].money += Skepiting * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting, Dan Kamu Mendapatkan Rp.${Skepiting * count}`, m)
                        } else conn.reply(m.chat, `Kepiting Tidak Cukup`, m)
                        break
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
            break
        default:
                return conn.reply(m.chat, Kaine, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m)
        console.log(e)
    }
}

handler.help = ['tokoikan']
handler.tags = ['rpg']
    
handler.command = /^(tokoikan)$/i
handler.limit = true
handler.group = true
export default handler
