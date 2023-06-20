let buatall = 1
let handler = async (m, { conn, args, usedPrefix }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ("Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!")
    else conn.casino[m.chat] = true
    if (args.length < 1) return conn.reply(m.chat, usedPrefix + command + " <jumlah>\n" + usedPrefix + command + " 1000", m)
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            if (Aku > Kamu) {
    let caption = `*C A S I N O*
  
*@${m.sender.split("@")[0]}*
┗┅⭑ ${Kamu} Point
*@${conn.user.jid.split("@")[0]}*
┗┅⭑ ${Aku} Point

*Kalah*
Kamu Kehilangan ${count} Uang`.trim()
    conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
    } else if (Aku < Kamu) {
    let caption = `*C A S I N O*
    
*@${m.sender.split("@")[0]}*
┗┅⭑ ${Kamu} Point
*@${conn.user.jid.split("@")[0]}*
┗┅⭑ ${Aku} Point

*Menang*
Kamu Mendapatkan ${count * 2} Uang`.trim()
    conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
    } else {
    let caption = `*C A S I N O*
 
*@${m.sender.split("@")[0]}*
┗┅⭑ ${Kamu} Point
*@${conn.user.jid.split("@")[0]}*
┗┅⭑ ${Aku} Point

*Seri*
Kamu Mendapatkan ${count * 1}`.trim()
    conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
            }
        } else conn.reply(m.chat, `Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *.claim* Terlebih Dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply("Error!!")
    } finally {
        delete conn.casino[m.chat]
    }
}
handler.help = ["casino"]
handler.tags = ["rpg"]
handler.command = /^(casino|csn)$/i
handler.group = true
export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
