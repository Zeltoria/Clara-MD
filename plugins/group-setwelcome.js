let handler = async (m, { conn, text, isROwner, isOwner }) => {
	if (text) {
		if (isROwner) global.conn.welcome = text;
		else if (isOwner) conn.welcome = text;
		else global.db.data.chats.sWelcome = text;
		m.reply("Berhasil");
	} else throw "Teksnya?";
};
handler.help = ["setwelcome"];
handler.tags = ["group"];
handler.command = /^setwelcome$/i;

handler.group = true;
handler.admin = true;

export default handler;
