import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)
    let res = await fetch(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${global.lolkey}`)
    let json = await res.json()
    let thumb = await (await fetch(json.result.profile_picture)).buffer()
    let hasil = `
• *Name*: ${json.result.screen_name}
• *NickName*: ${json.result.name}
• *Bio*: ${json.result.description}
• *Follower:* ${json.result.followers}
• *Following:* ${json.result.following}
• *Tweet:* ${json.result.tweet}
• *Join:* ${json.result.joined}
`

    conn.sendFile(m.chat, thumb, 'twitter.jpg', hasil, m)
		}
handler.help = ['twitterstalk']
handler.tags = ['internet']
handler.command = /^(twitterstalk)$/i
handler.limit = true

export default handler
