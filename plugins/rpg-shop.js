// Buy
const limit = 999
const potion = 1250
const trash = 99
const wood = 700
const rock = 850
const string = 400
const iron = 3000
const diamond = 10000
const emerald = 6000
// Sell
const spotion = 650
const strash = 46
const swood = 350
const srock = 437
const sstring = 200
const siron = 1500
const sdiamond = 5000
const semerald = 3000
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `*List Barang RPG*\n
- Limit > Rp.${limit}
- Potion > Rp.${potion}
- Trash > Rp.${trash}
- Wood > Rp.${wood}
- Rock > Rp.${rock}
- String > Rp.${string}
- Iron > Rp.${iron}
- Diamond > Rp.${diamond}
- Emerald > Rp.${emerald}
`.trim()
    try {
      if (/beli/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            case 'emerald':
                        if (global.db.data.users[m.sender].money >= emerald * count) {
                            global.db.data.users[m.sender].money -= emerald * count
                            global.db.data.users[m.sender].emerald += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Emerald Dengan Harga Rp.${emerald * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Emerald Dengan Harga Rp.${emerald * count}`,m)
                    break
            case 'diamond':
                        if (global.db.data.users[m.sender].money >= diamond * count) {
                            global.db.data.users[m.sender].money -= diamond * count
                            global.db.data.users[m.sender].diamond += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga Rp.${diamond * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Diamond Dengan Harga Rp.${diamond * count}`,m)
                    break
            case 'iron':
                        if (global.db.data.users[m.sender].money >= iron * count) {
                            global.db.data.users[m.sender].money -= iron * count
                            global.db.data.users[m.sender].iron += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga Rp.${iron * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Iron Dengan Harga Rp.${iron * count}`,m)
                    break
            case 'string':
                        if (global.db.data.users[m.sender].money >= string * count) {
                            global.db.data.users[m.sender].money -= string * count
                            global.db.data.users[m.sender].string += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} String Dengan Harga Rp.${string * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} String Dengan Harga Rp.${string * count}`,m)
                    break
            case 'rock':
                        if (global.db.data.users[m.sender].money >= rock * count) {
                            global.db.data.users[m.sender].money -= rock * count
                            global.db.data.users[m.sender].rock += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Rock Dengan Harga Rp.${rock * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Rock Dengan Harga Rp.${rock * count}`,m)
                    break
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga Rp.${potion * count}`, m)
                        } else conn.reply(m.chat, `Uang Tiidak Cukup Untuk Membeli ${count} Potion Dengan Harga Rp.${potion * count}`,m)
                    break
                    case 'limit':
                        if (global.db.data.users[m.sender].money >= limit * count) {
                            global.db.data.users[m.sender].money -= limit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Limit Dengan Harga Rp.${limit * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Limit Dengan Harga Rp.${limit * count}`,m)
                    break
                    case 'wood':
                        if (global.db.data.users[m.sender].money >= wood * count) {
                            global.db.data.users[m.sender].money -= wood * count
                            global.db.data.users[m.sender].wood += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Wood Dengan Harga Rp.${wood * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Wood Dengan Harga Rp.${wood * count}`,m)
                    break
                    case 'trash':
                        if (global.db.data.users[m.sender].money >= trash * count) {
                            global.db.data.users[m.sender].money -= trash * count
                            global.db.data.users[m.sender].trash += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Trash Dengan Harga Rp.${trash * count}`, m)
                        } else conn.reply(m.chat, `Uang Kamu Tidak Cukup Untuk Membeli ${count} Trash Dengan Harga Rp.${trash * count}`,m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].money += diamond * count
                        global.db.data.users[m.sender].diamond -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond Dengan Harga Rp.${sdiamond * count}`.trim(), m)
                    } else conn.reply(m.chat, `Diamond Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
            case 'emerald':
                    if (global.db.data.users[m.sender].emerald >= count * 1) {
                        global.db.data.users[m.sender].money += semerald * count
                        global.db.data.users[m.sender].emerald -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Emerald Dengan Harga Rp.${semerald * count}`.trim(), m)
                    } else conn.reply(m.chat, `Emerald Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
            case 'iron':
                    if (global.db.data.users[m.sender].iron >= count * 1) {
                        global.db.data.users[m.sender].money += siron * count
                        global.db.data.users[m.sender].iron -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Iron Dengan Harga Rp.${siron * count}`.trim(), m)
                    } else conn.reply(m.chat, `Iron Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
            case 'string':
                    if (global.db.data.users[m.sender].string >= count * 1) {
                        global.db.data.users[m.sender].money += sstring * count
                        global.db.data.users[m.sender].string -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} String Dengan Harga Rp.${sstring * count}`.trim(), m)
                    } else conn.reply(m.chat, `String Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
            case 'rock':
                    if (global.db.data.users[m.sender].rock >= count * 1) {
                        global.db.data.users[m.sender].money += srock * count
                        global.db.data.users[m.sender].rock -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Rock Dengan Harga Rp.${srock * count}`.trim(), m)
                    } else conn.reply(m.chat, `Rock Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
            case 'wood':
                    if (global.db.data.users[m.sender].wood >= count * 1) {
                        global.db.data.users[m.sender].money += swood * count
                        global.db.data.users[m.sender].wood -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Wood Dengan Harga Rp.${spotion * count}`.trim(), m)
                    } else conn.reply(m.chat, `Wood Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                case 'trash':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].money += strash * count
                        global.db.data.users[m.sender].trash -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Trash Dengan Harga Rp.${strash * count}`.trim(), m)
                    } else conn.reply(m.chat, `Trash Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                    case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga Rp.${spotion * count}`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup Untuk Di Jual`.trim(), m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        console.log(e)
    }
}

handler.help = ['beli', 'jual']
handler.tags = ['rpg']
    
handler.command = /^(beli|jual)$/i
handler.group = true
export default handler
