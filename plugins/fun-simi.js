import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo kak`
  let api = await fetch(`https://api.itsrose.life/others/simi?message=${text}&level=12&lc=id&apikey=${global.rose}`)
  let res = await api.json()
  m.reply(res.result.simi.sentence)
  }
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler
