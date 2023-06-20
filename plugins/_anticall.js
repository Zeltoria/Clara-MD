import db from '../lib/database.js'

export async function before(m) {
    let chat = global.db.data.chats[m.chat]
	this.ev.on('call', async (call) => {
		if (call[0].status == 'offer' && chat.anticall) await this.rejectCall(call[0].id, call[0].from)
	})
	return !0
}