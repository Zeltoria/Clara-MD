import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `Xyroinee-ID `, `My Skill Just Copas`, `Admin@xyroinee.xyz`, `Indonesia`, `https://api.xyroinee.xyz`, `Developer Clara - MD`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam`, `Nothing`, `Indonesia`, `https://github.com/Xyroinee/Clara-MD`, `Hanya Bot Pasaran Yang Sering Error`]
  ], m)
  await conn.sendFile(m.chat, "https://xyroinee.github.io/audio/audio_ownerku.mp3", 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler