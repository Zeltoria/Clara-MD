import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = gensin[Math.floor(Math.random() * gensin.length)]
	conn.sendFile(m.chat, url, 'gensin.jpg', '_Nih Kak_', m)
}
handler.command = /^(gensin)$/i
handler.tags = ['random']
handler.help = ['gensin']
handler.limit = true
export default handler

global.gensin = [
  "https://i.pinimg.com/originals/4a/fe/31/4afe31b113d6dcfdcd1ebe2783b57421.jpg",
  "https://i.pinimg.com/originals/60/65/46/606546c802d8b8e995cd69861a095f8c.jpg",
  "https://i.pinimg.com/originals/ee/91/3c/ee913c0b8d4e2b5d704bac983285c800.jpg://tinyurl.com/2z652cknom/2z652ckn",
  "https://i.pinimg.com/originals/c4/0f/20/c40f20d9a190f7ef8cad519e4edf7739.png",
  "https://i.pinimg.com/originals/5e/e7/0b/5ee70bf297995d67700299ea678ea22f.jpg",
    "https://i.pinimg.com/originals/67/10/bc/6710bc7e322e45013ec0b420d27bbb70.jpg",
    "https://i.pinimg.com/originals/ba/2d/3e/ba2d3e3fd64e0ce1b4177df63fee6603.jpg",
    "https://i.pinimg.com/originals/c4/5a/14/c45a14c10c3993c39520b3103d0b480b.png",
    "https://i.pinimg.com/originals/62/03/47/620347677310cf0c45978e90cfda244f.jpg",
    "https://i.pinimg.com/originals/70/56/bc/7056bc5ffe7a585fc63847b8caa0d43f.png",
    "https://i.pinimg.com/originals/64/fc/24/64fc245d1f66567fff31bf1e79d0421e.jpg",
    "https://i.pinimg.com/originals/c4/5a/14/c45a14c10c3993c39520b3103d0b480b.png",
    "https://i.pinimg.com/originals/74/76/2d/74762d42c23bd153e516df5c0f4f494b.jpg",
    "https://i.pinimg.com/originals/b8/fa/71/b8fa71d312da8231794541a79aef0016.jpg",
    "https://i.pinimg.com/originals/35/09/17/3509174f46ab04c96cea99b1ab9ef472.jpg",
    "https://i.pinimg.com/originals/41/dc/ae/41dcaeb6fadaea16412d83c0aa67a4e5.png",
    "https://i.pinimg.com/originals/62/03/47/620347677310cf0c45978e90cfda244f.jpg",
    "https://i.pinimg.com/originals/49/42/33/494233cb3110c01f8b8662d2b67f7889.jpg",
    "https://i.pinimg.com/originals/74/76/2d/74762d42c23bd153e516df5c0f4f494b.jpg",
    "https://i.pinimg.com/originals/13/8f/d0/138fd070b34b529f12cd1a0433ae9b39.jpg",
    "https://i.pinimg.com/originals/7e/c3/da/7ec3dabd212945f67b54dc0e32df105d.png",
    "https://i.pinimg.com/originals/b8/fa/71/b8fa71d312da8231794541a79aef0016.jpg",
    "https://i.pinimg.com/originals/49/42/33/494233cb3110c01f8b8662d2b67f7889.jpg"
  ]
