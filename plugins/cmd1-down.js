let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
  ╰─╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒╭─╯

┌── *YOUTUBE* 
├ */ytmp3* - _<enlace>_
├ */ytmp4* - _<enlace>_
├ */ytmp3doc* - _<enlace>_
└ */ytmp4doc* - _<enlace>_
┌── *INSTAGRAM* 
├ */instagram* - _<enlace>_
├ */instagram2* - _<enlace>_
├ */instagram3* - _<enlace>_
├ */igstalk* - _<username>_
└ */igstory* - _<username>_
┌── *FACEBOOK* 
├ */fb* - _<enlace>_
├ */fb2* - _<enlace>_
├ */fb3* - _<enlace>_
├ */fb4* - _<enlace>_
└ */fb5* - _<enlace>_
┌── *PICTURE* 
├ */wallpaper* - _<texto>_
├ */wallpaper2* - _<texto>_
└ */imagen* - _<texto>_
┌── *SEARCH INFO MEDIA* 
├ */play* - _<texto>_
├ */play.1* - _<texto>_
├ */play.2* - _<texto>_
├ */playdoc* - _<texto>_
├ */playlist* - _<texto>_
└ */playlist2* - _<texto>_
┌── *MEDIAFIRE*
└ */mediafire* - _<enlace>_
┌── *GITHUB*
└ */gitclone* - _<enlace>_
┌── *GOOGLE DRIVE(share)*
└ */gdrive* - _<enlace>_

${readMore}
┌── *TIKTOK*
├ */tiktokstalk* - _<username>_
└ */tiktok* - _<enlace>_
┌── *TWITTER*
└ */twitter* - _<enlace>_
┌── *APKS (rexdl.com)*
└ */dapk2* - _<enlace>_
┌── *STICKER (getstickerpack.com)
├ */stickerly* - _<texto>_
└ */stickerpack* - _<enlace>_
┌── *SPOTIFY*
└  */spotify* - _<texto>_ 
┌── *MUSICA*
└  */soundcloud* - _<texto>_
┌── *WEBSITES +18*
├ */xnxxdl* - _<enlace>_
└ */xvideosdl* - _<enlace>_
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
handler.help = ["down"];
handler.tags = ["main"];
handler.command = /^(down|runtime|uptime)$/i;
export default handler;
