import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)
    let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${global.lolkey}`)
    let json = await res.json()
    let thumb = await (await fetch(json.result.user_picture)).buffer()
    let hasil = `
• *Name*: ${json.result.username}
• *NickName*: ${json.result.nickname}
• *Bio*: ${json.result.bio}
• *Follower:* ${json.result.followers}
• *Following:* ${json.result.following}
• *Likes:* ${json.result.likes}
• *Video:* ${json.result.video}
`

    conn.sendFile(m.chat, thumb, 'tiktok.jpg', hasil, m)
		}
handler.help = ['tiktokstalk']
handler.tags = ['internet']
handler.command = /^(tiktokstalk)$/i
handler.limit = true

export default handler
