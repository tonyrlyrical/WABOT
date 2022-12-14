let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐆𝐑𝐎𝐔𝐏𝐒╭──╯

┌── *EFECTOS Y LOGOS* 🖍️
├ */phmaker* - <opcion> <imagen>
├ */logos* - <efecto> <texto>
├ */logochristmas* - <texto>
├ */logocorazon* - <texto>
├ */ytcomment* - <texto>
├ */hornycard* - <@tag>
├ */simpcard* - <@tag>
├ */lolice* - <@tag>
├ */itssostupid*
├ */pixelar*
└ */blur*
┌── *EFECTOS DE AUDIO* 🎤
├ */bass*
├ */blown*
├ */deep*
├ */earrape*
├ */fast*
├ */fat*
├ */nightcore*
├ */reverse*
├ */robot*
├ */slow*
├ */smooth*
├ */tupai* 
└ 𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚞𝚗 𝚊𝚞𝚍𝚒𝚘 𝚘 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣
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
handler.help = ["edit"];
handler.tags = ["main"];
handler.command = /^(edit|runtime|uptime)$/i;
export default handler;
