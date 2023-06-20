import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teksnya?'
  let res = `https://oni-chan.my.id/api/canvas/loliGgo?name=${response[0]}&apikey=`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih Kak`, m, false)
}
handler.help = ['loliggo']
handler.tags = ['maker']
handler.command = /^(loliggo)$/i
handler.register = false

handler.limit = true

export default handler
