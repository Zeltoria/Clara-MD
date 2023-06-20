
let handler = async (m, { conn, usedPrefix, participants }) => {

conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightnaga[m.sender] != "undefined" && conn.fightnaga[m.sender] == true) return m.reply(`*Tidak Bisa Melakukan Battle Karena Arena Yang Kamu Miliki Dipakai Untuk Pertarungn Pet Kamu Yang Lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Pet Kamu* (Kyuubi ${global.db.data.users[m.sender].kyubi}) Menantang Kyuubinya *${conn.getName(lawan)}* (Kyuubi ${global.db.data.users[lawan].kyubi}) Lagi Berkelahi.\n\nTunggu ${lamaPertarungan} Menit Lagi Dan Lihat Siapa Yang Menang.`)

  conn.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin Lagi Levelnya','Cupu','Kurang Hebat','Ampas Petnya','Pet Gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].kyubi;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].kyubi;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet Kamu* (Kyuubi ${global.db.data.users[m.sender].kyubi}) Menang Melawan Kyuubinya *${conn.getName(lawan)}* (Kyuubi ${global.db.data.users[lawan].kyubi}) Karena Kyuubi Kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet Kamu* (Kyuubi ${global.db.data.users[m.sender].kyubi}) Kalah Melawan Kyuubinya *${conn.getName(lawan)}* (Kyuubi ${global.db.data.users[lawan].kyubi}) Karena Pet Kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang Kamu Berkurang Rp. ${denda.toLocaleString()}`)
  }else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil Imbang Kak, Ga Dapet Apa Apa`)
  }

  delete conn.fightnaga[m.sender]
}
handler.help = ['fightkyubi']
handler.tags = ['rpg']
handler.command = /^(fightkyubi)$/i
handler.limit = true
handler.group = true

export default handler

function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
