let handler = async m => m.reply(`
            .✵.𝗚𝗥OUP BIMbot.✵.

            https://chat.whatsapp.com/IruqYDfFLcHBgQl2qI41PO
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
