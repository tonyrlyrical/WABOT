let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โโโ *AUDIOS* ๐
โ *Quien es tu sempai botsito 7w7*
โ *Te diagnostico con gay*
โ *A nadie le importa*
โ *Fiesta del admin*
โ *Fiesta del administrador *
โ *Vivan los novios*
โ *Feliz cumpleaรฑos*
โ *Noche de paz*
โ *Buenos dias*
โ *Buenos tardes*
โ *Buenos noches*
โ *Audio hentai*
โ *Chica lgante*
โ *Feliz navidad*
โ *Vete a la vrg*
โ *Pasa pack Bot*
โ *Atencion grupo*
โ *Marica quien*
โ *Murio el grupo*
โ *Oh me vengo*
โ *tio que rico*
โ *Viernes*
โ *Baneado*
โ *Sexo*
โ *Hola*
โ *Un pato*
โ *Nyanpasu*
โ *Te amo*
โ *Yamete*
โ *Baรฑate*
โ *Es puto*
โ *La biblia*
โ *Onichan*
โ *Mierda de Bot*
โ *Siuuu*
โ *Epico*
โ *Shitpost*
โ *Rawr*
โ *UwU*
โ *:c*
โ *a*
โ *Escribe las siguientes frases o palabras sin prefijo (/)*
${readMore}
`.trim();
    let buttons = [
      { buttonId: "#start", buttonText: { displayText: "๐ธ๐ฝ๐ธ๐ฒ๐ธ๐พ" }, type: 1 },
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
