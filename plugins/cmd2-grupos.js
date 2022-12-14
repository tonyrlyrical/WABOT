let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
  ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐆𝐑𝐎𝐔𝐏𝐒╭──╯

┌── *GRUPOS*
├ *admins* - _<texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
├ */add* - _<numero>_
├ */kick* - _<@tag>_
├ */kick2* - _<@tag>_
├ */listanum* - _<texto>_
├ */kicknum* - _<texto>_
├ */grupo* - _<abrir / cerrar>_
├ */grouptime* - _<opcion> <tiempo>_
├ */promote* - _<@tag>_
├ */demote* - _<@tag>_
├ */demote* - _<@tag>_
├ */setname* - _<texto>_
├ */setdesc* - _<texto>_
├ */invocar* - _<texto>_
├ */setwelcome* - _<texto>_
├ */setbye* - _<texto>_
├ */hidetag* - _<texto>_
├ */warn* - _<@tag>_
├ */unwarn* - _<@tag>_
├ */setpp* - _<imagen>_
├ */infogroup*
├ */resetlink*
├ */link*
├ */listwarn*
├ */fantasmas*
└ */destraba*
${readMore}
┌── *SETTINGS*
├ */enable* - _welcome_
├ */disable* - _welcome_
├ */enable* - _modohorny_
├ */disable* - _modohorny_
├ */enable* - _antilink_
├ */disable* - _antilink_
├ */enable* - _antilink2_
├ */disable* - _antilink2_
├ */enable* - _detect_
├ */disable* - _detect_
├ */enable* - _audios_
├ */disable* - _audios_
├ */enable* - _autosticker_
├ */disable* - _autosticker_
├ */enable* - _antiviewonce_
├ */disable* -antiviewonce_
├ */enable* - _antitoxic_
├ */disable* - _antitoxic_
├ */enable* - _antitraba_
├ */disable* - _antitraba_
├ */enable* - _antiarabes_
├ */disable* - _antiarabes_
├ */enable* - _modoadmin_
└ */disable* - _modoadmin_
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
handler.help = ["grupos"];
handler.tags = ["main"];
handler.command = /^(grupos|runtime|uptime)$/i;
export default handler;
