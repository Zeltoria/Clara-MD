import db from "../lib/database.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	conn.sendFile(m.chat, `http://storage.itsrose.my.id/lewd/${gr() + ".png"}`, 'anu.jpg', '_Tcih Sangean_', m)
};
handler.help = ["lewd"];
handler.tags = ["nsfw"];
handler.command = ["lewd"];

handler.premium = true

export default handler;
function gr() {
	return Math.floor(Math.random() * 400) + 10;
}
