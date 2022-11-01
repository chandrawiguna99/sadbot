var handler = async(m, { conn, text, usedPrefix, command }) => {

var str = `*https://github.com/chandrawiguna99/sadbot*\nSubscribe Untuk Mengetahui Update Selanjutnya:bit.ly/Papah\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']
    
module.exports = handler