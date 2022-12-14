let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐔𝐃𝐈𝐎╭──╯

┌── *AUDIOS* 🔊
├ *Quien es tu sempai botsito 7w7*
├ *Te diagnostico con gay*
├ *A nadie le importa*
├ *Fiesta del admin*
├ *Fiesta del administrador *
├ *Vivan los novios*
├ *Feliz cumpleaños*
├ *Noche de paz*
├ *Buenos dias*
├ *Buenos tardes*
├ *Buenos noches*
├ *Audio hentai*
├ *Chica lgante*
├ *Feliz navidad*
├ *Vete a la vrg*
├ *Pasa pack Bot*
├ *Atencion grupo*
├ *Marica quien*
├ *Murio el grupo*
├ *Oh me vengo*
├ *tio que rico*
├ *Viernes*
├ *Baneado*
├ *Sexo*
├ *Hola*
├ *Un pato*
├ *Nyanpasu*
├ *Te amo*
├ *Yamete*
├ *Bañate*
├ *Es puto*
├ *La biblia*
├ *Onichan*
├ *Mierda de Bot*
├ *Siuuu*
├ *Epico*
├ *Shitpost*
├ *Rawr*
├ *UwU*
├ *:c*
├ *a*
└ *Escribe las siguientes frases o palabras sin prefijo (/)*
${readMore}
`.trim();
    let buttons = [
      { buttonId: "#start", buttonText: { displayText: "𝙸𝙽𝙸𝙲𝙸𝙾" }, type: 1 },
    ];
    let buttonMessage = {
      image: pp,
      caption: str.trim(),
      mentions: [m.sender],
      footer: global.wm,
      buttons: buttons,
    };
    conn.sendPresenceUpdate("composing", m.chat);
    conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch {}
};
handler.help = ["audio"];
handler.tags = ["main"];
handler.command = /^(audio|runtime|uptime)$/i;
export default handler;
