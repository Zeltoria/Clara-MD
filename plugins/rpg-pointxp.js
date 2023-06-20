let handler = async (m, { args, text, conn }) => {
    

     if (!args[0] || !args[1]) return m.reply("Contoh: .expoint strength 1")
     if(isNaN(args[1])) return m.reply("Pake angka")
    let human = ["Strength", "Mana", "Stamina", "Agility", "Intelligence"]
    let hum = args[0].toLowerCase() // t

    if (!human.includes(hum)) return m.reply(`
Listnya
${human.map(hum => `› ${hum}`).join('\n')}`)

     let user = global.db.data.users[m.sender]
if (user.pointxp == 0) return m.reply(`Poin Exp Kamu Tidak Ada`)
user.hum += args[1]
user.pointxp -= args[1]

m.reply(`Selamat ${hum} Naik Ke ${user.hum}!`)
}
handler.help = ['expoint']
handler.tags = ['rpg']
handler.command = /^(ex(change)?(point)?)$/i
handler.group = true
export default handler
