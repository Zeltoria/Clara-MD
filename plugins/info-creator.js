import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Developer Bot `, `My Skill Just Copas`, `elistz21@gmail.com`, `Indonesia`, `https://github.com/Zeltoria`, `Owner Clara - MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam`, `Nothing`, `Indonesia`, `https://github.com/Zeltoria/Clara-MD`, `Hanya Bot Pasaran Yang Sering Error`]
  ], fkontak)
  await m.reply(`Hai Kak @${m.sender.split(`@`)[0]} Itu Nomor Ownerku, Jangan Macam Macam Ya ~`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
