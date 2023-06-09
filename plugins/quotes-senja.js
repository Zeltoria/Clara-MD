let handler = async (m, { conn, command, text }) => {

let senjai = pickRandom(global.senja)
m.reply(senjai)
}
handler.help = ['senja']
handler.tags = ['quotes']
handler.command = /^(senja)$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.senja = [

  "Senja selalu cantik kecuali saat kau patah hati.",
  "Aku masih rindu. Namun senja tak ingin lama bertamu.",
  "Ada yang tak tenggelam ketika senja datang, yakni rasa.",
  "Karena senja selalu menerima langit apa adanya.",
  "Setiap senja selalu menjanjikan kita awal yang baru.",
  "Senja telah mengajarkanku apa arti dari mengikhlaskan.",
  "Biar lelah, tapi dia tetap indah. Itulah senja.",
  "Senja tak pernah salah, hanya kenangan yang membuatnya basah.",
  "Hanya senja yang tau cara berpamitan dengan indah.",
  "Senja, perpaduan yang sungguh indah bagi alam semesta.",
  "Selepas senja, aku kembali menjadi manusia yang menutupi air mata dengan gelak tawa.",
  "Senjaku mulai menepi ke peraduannya.",
  "Karena senja tak pernah memintamu menunggu.",
  "Entah mana yang lebih indah, senja yang mulai memerah atau senyummu yang mulai merekah.",
  "Senja tak pernah membenci awan kelabu yang sering menutupinya.",
  "Jadilah seperti senja yang kehadirannya selalu membuat ketenangan dan kepergiannya selalu membuat kerinduan.",
  "Kamu seperti senja,terasa menyenangkan namun tak bertahan lama.",
  "Aku hanya dapat menikmati kehangatan senja yang tak akan pernah untuk menikmati kehangatan pelukanmu.",
  "Senja telah mengajarkan ku apa arti dari mengikhlaskan.",
  "Kamu bagaikan senja di sore hari, indah sesaat kemudian menghilang.",
  "Senja mengajarkan kita bahwa keindahan tak harus datang lebih awal.",
  "Senja tak pernah salah, hanya kenangan yang membuatnya basah.",
  "Kenyataanya senja tetaplah senja. Dia tak punya rasa, dia memberi indah sesaat kepada penikmatnya, lalu pergi begitu saja.",
  "Di antara senja dan keheningan tempat ini, mengingatmu menjadi kesibukan kecil yang membahagiakan.",
  "Di ujung senja yang sudah hampir hilang kali ini aku masih menanti sebuah kabar dan ku tak tahu harus berapa lama ku menunggu.",
  "Untuk luka yang terhapus senja, untuk duka yang makin meraja, yakinlah hati agar membaja, bisikan lembut dengan senyuman manja, Insyaallah bersama Allah semuanya akan baik-baik saja.",
  "Saat senja menyapa, aku menyadari bahwa masih banyak hal indah yang Tuhan ciptakan selain Kamu.",
  "Demi matahari senja yang menggantung manis manja di cakrawala, demi kebaikan dan ketulusan yang telaten diberikan semesta, dan demi ragam nama-nama Tuhan baik yang akrab maupun asing di telinga kita, sesungguhnya, manusia, adalah mahkluk yang merugi. Kecuali, ia yang mau belajar pada masa silam, berbuat yang terbaik di masa sekarang, dan menyiapkan segala sesuatu di masa depan, dengan keyakinan paling yakin pada terwujudnya sebuah impian.",
  "Tuhan, bersama tenggelamnya matahari senja ini, redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.",
  "Nikmat Allah mana yang kau dustakan disenja ini wahai saudara-saudaraku semua.",
  "Di tengah angin senja yang mendesak, aku merasakan kekuasaan waktu, yang tanpa pandang bulu mengubah segala-galanya.",
  "Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang.",
  "Salah satu nikmat Allah yang sampai detik ini bisa kurasakan adalah masih bisa bernapas dan menghirup segarnya udara senja.",
  "Salam senja dan Magrib. Doa kita kepada yang maha kuasa hanya taubat jawabannya, dosa kita kepada sesama berminta maaf penawarnya.",
  "Gelombang adzan mendayu meminang senja. Di sanalah, Tuhan melahirkan segala rindu.",
  "Engkau terkadang datang seperti jingga di kala senja, datang dengan keindahan berlalu menyisakan kegelapan.",
  "Senja: Mengajarkan kita bahwa yang indah pasti akan tenggelam.",
  "Senja pergi secara perlahan, karena ia tahu pergi secara tiba-tiba hanya menyakiti siapapun yang menikmatinya.",
  "Walau senja tinggalkan keindahan dan pergi, ia selalu datang kembali di esok hari. Tak seperti kamu yang lebih indah dari senja tapi pergi entah kemana.",
  "Ku mencintai kau seperti senja. Dengan keindahannya, tanpa durasinya.",
  "Jangan mengulangi kesalahan yang sama, karena masih banyak kesalahan kesalahan lain yang perlu dicoba.",
  "Terima kasih senja, kau telah menampakkan bahwa perpisahan tak semuanya menyakitkan. Dan kepergian tampak begitu indah tanpa kehangatan.",
  "Senja itu seperti kita, singkat dan bahagia.",
  "Aku hanyalah penikmat kehangatan senja yang tak akan bisa menikmati kehangatan pelukanmu.",
  "Hari ini aku belajar dari senja bahwa yang indah dan mempesona akan hilang dan tenggelam pada waktunya.",
  "Tanaman palsuku mati karena aku tidak berpura pura menyiramnya.",
  "Jangan rindu berat, kamu nggak akan kuat. Biar aku saja yang merindukanmu sekalipun bertambah berat badanku.",
  "Bermimpilah setinggi langit, jika kamu terjatuh berarti tidurmu kurang ke tengah.",
  "Dusk is proof that no matter what happens, everyday can end beautifully.",
  "From the twilight I learned that every beautiful things had to go through all the painful things.",
  "Twilight drops her curtain down, and pins it with a star. Lucky Maud Montgomery.",
  "Dusk teaches us that life is not always bright and shining.",
  "Twilight comes in a beautiful way. As beautiful as God ways in meet us.",
  "Every sunset bring a promise for a new dawn. -Ralph Waldo Emerson",
  "Dusk teaches us to appreciate all the great things the sun gives us.",
  "Don't forget that beautiful twilight needs blackened clouds.",
  "And dusk makes us understand the meaning of the word 'willing'.",
  "Twilight fell: The sky turned to a light, dusky purple littered with tiny silver stars. J.K. Rowling",
  "Pengagum senja, penyesap kopi, penikmat rindu, penimba ilmu, peninggi badan, pemanjat sutet, pembuka simontok, penyembah tutup botol.",
  "Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu.",
  "Mulai mempertanyakan alam raya, galaksi, planet-planet dan eksistensi saya di muka bumi ketika pagi-pagi belum juga ingin buang air besar.",
  "Jodoh tak akan ke mana-mana terlebih dahulu sebelum akhirnya menetap.",
  "Jatuh hati tidak pernah bisa memilih. Tuhan memilihkan. Kita hanyalah korban. Kecewa adalah konsekuensi, bahagia adalah bonus.",
  "Hujan dan gebetan itu mirip. Ada yang mengaku suka, tapi hanya memandangnya dari tempat duduk yang hangat, berkata-kata romantis tanpa pernah mau bersinggungan. Ada yang betulan suka, mengalahkan rasa tidak nyaman, langsung berinteraksi dengannya meski berisiko sakit.",
  "Enak atau tidaknya ucapan selamat malam dan selamat pagi itu tergantung siapa yang mengucapkan.",
  "Denganmu, basa-basi terasa berisi.",
  "Absurd sekali, kita. Cerita berjam-jam, lalu hilang kabar berhari-hari. Merindu diam-diam, hingga tidak lagi saling mencari.",
  "Aku lelah sembunyi, lelah merindukanmu dalam sunyi. Tanganku jangan dijabat, baiknya digenggam saja. Tak cuma jadi sahabat, jadi kekasihmu juga.",
  "Jangan pernah lupa, bahwa awan menghitam adalah yang membuat senja terlihat sempurna.",
  "Meski senja tiba di ujung mata, rindu enggan tinggalkan kita, tak peduli dengan siapa menanti malam, rindu ini senantiasa menyapa.",
  "Ketika senja mulai tenggelam, ku mulai menyadari kamu yang paling berarti, dan ketika sinar matahari menyapa ku sadari kamu hanya mimpi.",
  "Senjaku berlari mengejar ketinggalannya, menyusuri setapak di tepian jurang menganga, di bawahnya riuh ombak berirama lara.",
  "Jika kamu senja, maka aku jingga. Muncul bersama, hilang pun juga.",
  "Matahari yang tenggelam akan mengajarkan pada kita, agar bisa menghargai apa yang diberikan matahari untuk kita.",
  "Senja begitu cepat berganti, dan sampai saat ini kau tetap kunanti.",
  "Senja memang begitu indah, namun cahaya mentari tetap tak tergantikan, meski dengan lilin yang bersinar sangat terang sekalipun.",
  "Saat jingga bersetubuh dengan gelap, sepasang mata sibuk kemasi air matanya; seakan takut, senja mencuri rindu miliknya.",
  "Senja mengajarkan pada kita, bahwa kehidupan tak selalu berjalan dengan cemerlang dan bersinar."
]