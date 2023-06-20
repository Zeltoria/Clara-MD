import fetch from 'node-fetch';

let handler = m => m;

handler.before = async (m) => {
  let chat = global.db.data.chats[m.chat];
  if (chat.simi && !chat.isBanned) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    if (!m.text) return;
    let api = await fetch(`https://api.itsrose.life/others/simi?message=${encodeURIComponent(m.text)}&level=12&lc=id&apikey=${global.rose}`);
    if (!api.ok) throw new Error('Error fetching data');
    let res = await api.json();
    if (res.result && res.result.simi && res.result.simi.sentence) {
      return m.reply(res.result.simi.sentence);
    } else {
      return m.reply('Tidak ada respons yang valid.');
    }
  }
  return true;
};

export default handler;
