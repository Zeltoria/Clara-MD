import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Mau Di Simpen Kemana?`
    if (!m.quoted.text) throw `Balas Pesan Nya!`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Tersimpan Di ${path}`)
}
handler.help = ['sf']
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler