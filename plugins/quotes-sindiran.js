import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
  let ucpn = `${ucapan()}`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let cina = pickRandom(global.sindiran)
m.reply(cina)
handler.help = ['sindiran']
handler.tags = ['quotes']
handler.command = /^(sindiran)$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.sindiran = [

  "Perbedaan teman dan musuh sangat tipis. Ada saatnya dia mendukung berbagai hal yang kamu lakukan, tapi bisa saja dia menusuk dari belakang, bahkan menghancurkanmu.",
  "Dasar gak tahu berterima kasih! Makanya hidupnya bisa menderita seperti itu.",
  "Awas aja, apa yang dia lakukan sekarang bakal berbuah karma di kemudian hari.",
  "Kalau sudah berbicara tentang perasaan, sahabat pun berisiko jadi pelaku tikung menikung.",
  "Bahkan kayu yang berada di sungai selama puluhan tahun pun tak akan berubah menjadi buaya.",
  "Kata 'teman' adalah label yang bisa dicoba siapa saja. Dan kaulah yang menentukan siapa yang paling pantas memakainya.",
  "Sekali-kali bolehlah menjadi orang yang jahat karena menjadi orang baik terus malah dimanfaatin sama teman sendiri.",
  "Terus aja ngomong, aku nguap kalau aku tertarik.",
  "Ada tujuh miliar orang di dunia ini. Kenapa kamu biarkan salah satu dari mereka menghancurkan hidupmu?.",
  "Oh, menderita? Makanya, jangan bikin susah orang.",
  "Hati-hati dengan mereka yang tak pernah sesuai antara ucapan dan tindakan.",
  "Silahkan ngomongin gue sepuasnya, gue hanya senyum saja karena gue tahu karena akan ada yang membalas.",
  "Tak seorang pun mempercayai pembohong. Sekalipun dia menceritakan kebenaran.",
  "Teman datang dan pergi, tapi aku tidak menyangka kamu juga.",
  "Oh, salahku. Maaf sudah mengganggumu. Aku lupa aku hanya ada ketika kamu membutuhkan sesuatu dariku.",
  "Bodoh kok dipiara, kambing tuh dipiara biar gemuk.",
  "Kamu terdengar lebih merdu ketika mulutmu tertutup.",
  "Daripada kamu mau makan teman, jangan lupa tambahkan nasi biar makin kenyang.",
  "Kamu tuh lucu banget, udah tau salah kok malah ngotot.",
  "Omonganmu seperti parfum isi ulang, wangi tapi palsu.",
  "Pasti kamu capek karena harus pakai make up di dua wajah sekaligus.",
  "Konon jika jodoh adalah tulang rusuk, maka mantan sudah menjadi fosil alias tulang belulang.",
  "Bekerjalah seperti tuyul, ia tidak kelihatan, tidak butuh pujian, tidak gila jabatan, dan tidak pula cari perhatian, tapi hasilnya JELAS.",
  "Kamu kok seperti tahi cicak, neng, mukanya putih tapi lehernya hitam.",
  "Kata orang cinta itu buta, tapi nyatanya cinta bisa melihat mana yang tampan dan mana yang buruk rupa.",
  "Berjuangnya sama aku, giliran sudah berhasil kamu berpaling.",
  "Aku tidak kehilanganmu, kamu yang kehilanganku. Kau akan mencari sosokku pada setiap pacar yang kau kencani, tapi kau tidak akan menemukanku.",
  "Kamu mengingatkanku pada receh gopean. Bermuka dua dan nggak terlalu berharga.",
  "Kalau berbohong dan berselingkuh adalah sebuah pekerjaan, kamu pasti sudah menjadi jutawan.",
  "Buanglah mantan pada orang yang lebih membutuhkan.",
  "Perasaan terbaik adalah melihatmu sekarang bersama dengan seseorang yang wajahnya seperti baru saja ditendang pakai kaleng biskuit.",
  "Maaf aku alergi dengan yang namanya balikan sama mantan.",
  "Aku tidak akan pernah sedih kehilangan dirimu, justru bahagia karena tahu siapa kamu sebenarnya.",
  "Apa benar mantan itu singkatan dari manis, tapi setan?",
  "Baru putus aja udah punya pacar baru lagi, kok kamu tuh kaya rumah petak yang murah, sih.",
  "Jika ada seorang teman mengatakan kamu 'PINTAR', jangan sombong. Belum tentu teman tersebut mengatakan yang sebenarnya.",
  "Contohlah tukang parkir, walaupun punya banyak mobil tapi dia nggak sombong! Karena dia tahu semua itu hanya titipan.",
  "Lihatlah ke atas sebagai motivasi bukan untuk jadi sombong, dan melihat ke bawah agar lebih bersyukur bukan untuk menjadi rendah diri.",
  "Kepala lo lebih besar dari mulut lo, tapi kenapa omong kosong lo lebih besar dari cara berpikir lo?",
  "Orang sombong biasanya suka mengatakan hal berlebihan yang sebenarnya tidak ada padanya.",
  "Bergayalah sesuai dompetmu, wahai anak muda.",
  "Sama-sama berasal dari tanah, sama-sama nginjek tanah dan bakal balik lagi ke tanah. Jadi buat apa sombong?",
  "Orang sombong sebenarnya pengecut karena ia tak berani bergaul dengan orang yang lebih hebat dengan dirinya.",
  "Yang lagi cantik jangan sombong, itu cantik sebentar doang. Tua dikit itu cantik sudah hilang, jadi jangan sombong ya cantik.",
  "Orang sombong itu ibarat orang yang berdiri di atas gunung. Dia melihat orang lain kecil, tapi dia tidak sadar orang lain melihatnya kecil juga.",
  "Katanya move on, tapi ternyata masih sibuk stalking mantan.",
  "Jangan berkata dia hanya temanmu. Bukankah kita dulu juga berawal dari sebuah pertemanan?",
  "Hanya karena aku bersamamu sepanjang waktu, bukan berarti kamu bisa menyia-nyiakan aku.",
  "Sudah punya pacar masih juga cari perhatian orang lain, gak bahagia ya lu?",
  "Jadi siapa yang ada dalam handphonemu? Kalau sedang bersamaku kau selalu sibuk dengan handphonemu, tapi kalau aku jauh darimu pesanku lama kau balas.",
  "Hubungan akan karam jika terlalu banyak penumpang di dalamnya.",
  "Kamu sih cuma mau dimengerti dan dipahami tanpa belajar untuk mengerti dan memahami.",
  "Cie,- yang chatnya kalah penting sama game Mobile Legend.",
  "Ternyata lebih gampang update status daripada kasih kabar.",
  "Di zaman now screenshot lebih dipercaya daripada omongan.",
  "Kebohongan yang diceritakan terlalu sering lama-lama akan terasa seperti kebenaran.",
  "Tak perlu mengkhawatirkan mereka yang membicarakanmu di belakang. Mereka ada di belakangmu karena suatu alasan.",
  "Teman datang seiring banyaknya kebutuhan.",
  "Maaf kalau aku menyakiti perasaanmu saat aku bilang kamu bodoh. Aku kira kamu sudah tahu.",
  "Seorang genius sejati takut terlihat tidak sempurna dan biasanya lebih suka diam daripada mengatakan sesuatu yang tidak berarti.",
  "Sayang, kalau kamu mau bermuka dua, paling tidak buatlah salah satunya terlihat cantik.",
  "Semoga suatu hari nanti hidupmu bakal seindah apa yang kamu pamerkan di Facebook.",
  "Miliki lebih dari yang kau tunjukkan, bicaralah lebih sedikit dari yang kamu tahu.",
  "Aku tak butuh teman yang berubah saat aku berubah dan mengangguk saat aku mengangguk. Bayanganku bisa melakukannya dengan lebih baik.",
  "Dunia itu tidak sempit. Kamu saja yang mainnya kurang jauh.",
  "Menjadi suami yang baik sama seperti menjadi komika. Kamu perlu pengalaman selama 10 tahun sebelum dapat menyebut dirimu seorang pemula.",
  "Perempuan itu lebih suka perhatian kecil tapi berkali-kali, daripada perhatian besar tapi cuma sesekali.",
  "Jadilah suami yang baik, yang nggak hobi merayu wanita lain di dunia maya, yang memang banyak yang lebih cantik.",
  "Lebih baik di awal cuek, tapi akhirnya perhatian daripada awalnya perhatian tapi akhirnya cuek.",
  "Betapa indahnya kalau kita saling menghargai dan mengerti. Jangan saling egois dan nggak peduli.",
  "Yang egois kamu, yang selalu disalahkan aku. Yang temperamental kamu, yang selalu sabar aku.",
  "Di balik kesibukanmu, ada yang rela meluangkan waktunya untuk sekadar menunggumu.",
  "Aku tidak mengerti dengan cara berpikirmu. Diamnya istri itu bukan berarti membiarkanmu berbuat sesuka hati dan menyakitiku.",
  "Kalau sayang pasti nggak cuek. Kalau cuek pasti nggak sayang.",
  "Hidup harus bersosialisasi jangan egois. Kalau mau egois mending hidup di hutan.",
  "Mulut dijaga jangan kalah sama pantat deh. Pantat aja kalau mau kentut mikir dulu, ada yang dengerin apa nggak. Masa mulut mau ngomong nggak mikir dulu.",
  "Katanya sih kalau ada orang yang hobinya nyari-nyari kesalahan orang lain, tapi giliran dikritik langsung marah, itu artinya proses evolusi dia dari monyet ke manusia belum selesai dan tidak sempurna.",
  "Aku kangen denganmu, kamu yang dulu, yang baru jelek.",
  "Penampilan yang cantik adalah saat kita merasa nyaman dengan diri sendiri. Saat kita tidak iri dengan orang lain kita akan lebih cantik.",
  "Tidak selalu harus bersama, tapi selalu paham kapan seharusnya ada. Itulah sahabat sebenarnya.",
  "Saya menyukai teman yang memiliki pikiran terbuka karena mereka cenderung membiarkanmu untuk melihat segala masalah dari berbagai sudut pandang.",
  "Lebih baik musuh yang jujur daripada teman palsu.",
  "Kamu harus mengenali teman-teman yang palsu karena itu yang tersulit untuk disadari.",
  "Jangan pernah percaya kepada siapa pun yang menginginkan apa yang kamu dapatkan. Teman atau bukan, iri hati merupakan emosi yang luar biasa.",
  "Kata-kata itu mudah dibuat, seperti angin. Sahabat yang setia sulit untuk ditemukan.",
  "Akan lebih mudah untuk memaafkan orang biasa daripada memaafkan luka yang diberikan dari orang tercinta.",
  "Di balik sakitnya pengkhianatan yang Ku rasa, ku ucapkan terima kasih Padamu. Karena pengkhianatanmu membuat aku tidak lagi berkawan dengan kemunafikan.",
  "Rasa sakit itu mengajariku tentang kedewasaan, berhati-hati, dan menjadi untuk lebih baik lagi.",
  "Terima kasih sudah meninggalkanmu saat aku sendirian. Aku baru sadar kalau aku bisa melakukan semuanya dengan lebih baik tanpamu.",
  "Aku pernah tertikam oleh ilusiku sendiri. Pengkhianatan oleh hatiku yang sibuk menguntai simpul pertanda cinta.",
  "Aku sudah pernah merasakan kepahitan dalam hidup dan yang paling pahit ialah berharap kepada manusia.",
  "Terkadang kamu harus ikhlas dan membiarkan karma mengambil alih.",
  "Alhamdulillah, Tuhan masih sayang kepadaku dengan memperlihatkan siapa dirimu ketika berada di belakangku. Walau hatiku sangat sakit kala itu, tapi aku bersyukur bisa tahu. Bahwa kau adalah orang yang berbahaya.",
  "Pengalaman telah mengajariku mana itu saudara, mana kawan, mana sahabat, mana pengkhianat, mana pecundang, mana yang baik, dan mana yang pura-pura baik.",
  "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan.",
  "Sudah lama aku ingin pergi darimu, tapi tidak memiliki alasan. Dan sekarang aku ucapkan terima kasih karena pengkhianatan dirimu menciptakan alasan untuk pergi meninggalkan kamu.",
  "Jangan pikir saat kamu dapat menyakitiku, kamu itu terlihat hebat!Ingat, saat itu kamu sudah kehilangan orang yang benar-benar mencintaimu...",
  "Aku berhenti, terima kasih. Semoga akan ada sosok yang mampu mencintaimu sebanyak aku dan menunggumu sesabar caraku. Selamat kehilangan cinta yang paling besar.",
  "Untuk yang pernah menyakitiku, terima kasih telah mengajarkanku arti bersabar dan semoga kamu tidak akan pernah merasakan sakit yang kurasakan.",
  "Tidak bisa dibayangkan tingkah laku dan caramu. Kemarin katanya sayang, eh, ternyata hari ini malah kau berkata sayang dia.",
  "Pengkhianatan itu ibarat lumut yang tumbuh di sela-sela bebatuan, menyelusup dan tumbuh, lalu secara perlahan menghancurkan.",
  "Ketika aku melihatmu, aku selalu berpikir wajah mana yang kamu lihat ketika bercermin.",
  "Salah satu hal yang menggelikan yang terjadi pada manusia, seseorang menyakitimu lalu dia bertingkah seolah-olah kamu yang menyakitinya.",
  "Pengkhianat berawal dari watak penjilat.Penjilat berawal dari watak penjahat.Penjahat berawal dari watak sekarat.Jadi, pengkhianat akan sekarat dunia akhirat.",
  "Aku sudah berniat menaruh hati kepadamu, tapi kamu malah mengecewakan aku terlebih dahulu."
]
global.flaaaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}