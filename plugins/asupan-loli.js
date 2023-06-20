let handler = async (m, { conn, text }) => {
    let yh = global.asupan
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendFile(m.chat, url, 'anu.mp4', '_Tcih Dasar Pedo_', m)
  }
  handler.command = /^(loli)$/i
  handler.tags = ['sfw']
  handler.help = ['loli']
  
  handler.limit = true
  
  export default handler
  
 global.asupan = [
  "https://storage.itsrose.my.id/asupan/loli/loli1.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli2.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli3.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli4.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli5.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli6.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli6.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli7.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli7.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli8.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli9.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli10.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli11.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli12.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli13.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli14.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli15.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli16.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli17.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli18.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli19.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli20.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli21.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli23.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli24.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli25.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli26.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli27.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli28.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli29.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli30.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli31.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli32.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli33.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli34.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli35.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli36.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli37.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli38.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli39.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli40.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli41.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli42.mp4",
  "https://storage.itsrose.my.id/asupan/loli/loli43.mp4"
]
