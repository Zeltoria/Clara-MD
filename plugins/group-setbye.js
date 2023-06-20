let handler = async (m, { conn, text, isROwner, isOwner }) => {
	if (text) {
		if (isROwner) global.conn.bye = text;
		else if (isOwner) conn.bye = text;
		else global.db.data.chats.sBye = text;
		m.reply("Berhasil");
	} else throw "Teksnya?";
};
handler.help = ["setbye"];
handler.tags = ["group"];
handler.command = /^setbye$/i;
handler.group = true;
handler.admin = true;

export default handler;
