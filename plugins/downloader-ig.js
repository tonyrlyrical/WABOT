import fetch from 'node-fetch'
import instagramGetUrl from 'instagram-url-direct'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*[âððððâ] ð¸ð½ð¶ðð´ðð´ ðð½ ð´ð½ð»ð°ð²ð´ ð³ð´ ð¸ð½ððð°ð¶ðð°ð¼, ð´ð¹ð´ð¼ð¿ð»ð¾: ${usedPrefix + command}* https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link` 
try {
await m.reply(`*[â] á´á´sá´á´ÊÉ¢á´É´á´á´ sá´ á´ Éªá´á´á´, á´É¢á´á´Êá´á´ á´É´ á´á´á´á´É´á´á´ á´á´Ê Òá´á´ á´Ê, á´sá´á´ á´Êá´á´á´sá´ á´á´á´á´á´ á´á´Êá´Ê á´É´á´Êá´ 2 Ê 10 á´ÉªÉ´á´á´á´s á´á´á´á´É´á´Éªá´É´á´á´ á´á´ Êá´ á´á´Êá´á´Éªá´É´ á´á´Ê á´ Éªá´á´á´...*`)
switch (command) {        
case "instagramdl": case "instagram": case "igdl": case "ig": 
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `ð *Url:* ${shortUrl1}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
break  
case "instagramdl2": case "instagram2": case "igdl2": case "ig2":        
const resultss = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `ð *Url:* ${shortUrl2}`.trim()
conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
break               
case "instagramdl3": case "instagram3": case "igdl3": case "ig3":            
const resultssss = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt3 = `ð *Url:* ${shortUrl3}`.trim()
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
break       
}} catch {
await await m.reply(`*[âððððâ] ð´ððð¾ð, ð¿ð¾ð ðµð°ðð¾ð ððð´ð»ðð° ð° ð¸ð½ðð´ð½ðð°ðð»ð¾, ðð¸ ð´ð» ð´ððð¾ð ðð¸ð¶ðð´, ð¿ððð´ð±ð´ ð²ð¾ð½ ð¾ððð° ð¾ð¿ð²ð¸ð¾ð½ (${usedPrefix}ig, ${usedPrefix}ig2, ${usedPrefix}ig3)*`)
}}
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i
export default handler
