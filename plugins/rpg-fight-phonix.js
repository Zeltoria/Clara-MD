let handler = async (m, { conn, usedPrefix, participants }) => {

conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightnaga[m.sender] != "undefined" && conn.fightnaga[m.sender] == true) return m.reply(`*Tidak Bisa Melakukan Battle Karena Arena Yang Kamu Miliki Dipakai Untuk Pertarungan Pet Kamu Yang Lain.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Pet Kamu* (Phonix ${global.db.data.users[m.sender].phonix}) Menantang Phonixnya *${conn.getName(lawan)}* (Phonix ${global.db.data.users[lawan].phonix}) Lagi Berkelahi.\n\nTunggu ${lamaPertarungan} Menit Lagi Dan Lihat Siapa Yang Menang`)

  conn.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin Lagi Levelnya','Cupu','Kurang Hebat','Ampas Petnya','Pet Gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].phonix;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].phonix;i++) kesempatan.push(lawan)

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
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet Kamu* (Phonix ${global.db.data.users[m.sender].phonix}) Menang Melawan Phonixnya *${conn.getName(lawan)}* (Phonix ${global.db.data.users[lawan].phonix}) Karena Phonix Kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 10000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet Kamu* (Phonix ${global.db.data.users[m.sender].phonix}) Kalah Melawan Phonixnya *${conn.getName(lawan)}* (Phonix ${global.db.data.users[lawan].phonix}) Karena Pet Kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang Kamu Berkurang Rp. ${denda.toLocaleString()}`)
  }else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil Imbang Kak, Ga Dapet Apa Apa`)
  }

  delete conn.fightnaga[m.sender]
}
handler.help = ['fightphonix']
handler.tags = ['rpg']
handler.command = /^(fightphonix)$/i
handler.limit = true
handler.group = true

export default handler

function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
