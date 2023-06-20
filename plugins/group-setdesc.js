let handler = async (m, { text }) => {
	if (!text) throw "Teksnya?";

	await conn.groupUpdateDescription(m.chat, text);
	return m.reply("Berhasil.");
};

handler.help = ["setdesc", "sdesc"];
handler.tags = ["group"];
handler.command = /^(setdesc|sdesc)$/i;

handler.group = true;
handler.admin = true;

export default handler;
