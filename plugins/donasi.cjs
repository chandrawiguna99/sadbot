var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081211423262]
│ • DANA [081211423262]
│ • OVO [081211423262]
│ • GOPAY [081211423262]
│ • SHOPPY PAY [081211423262]
│ • Saweria [https://saweria.co/]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285861009691
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
