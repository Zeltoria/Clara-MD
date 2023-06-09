let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... Teksnya Mana?'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => ''),
    comment: text,
    username: m.pushName
  }), 'yt-comment.png', 'Nih Kak', m)
}

handler.help = ['ytcomment','ytkomen']
handler.tags = ['maker']
handler.limit = true

handler.command = /^(ytcomment|ytkomen)$/i

export default handler
