/* TeenuhX Re Moded by Shahid shazz
*/

const Shazz = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="എന്തെങ്കിലും type ചെയ്യൂ 🧚"
const Ln = "▷🧞𝚂𝙾𝙼𝙴 𝚂𝙾𝙼𝙴𝙾𝙽𝙴𝚂𝙰𝚈 𝙻𝙸𝚂𝚃 🤗◁ "
const code = "╔════◉ CAMANDS ◉════╗\n\n            ❖═List═❖\n*🔮.miasay       ❴text❵\n🔮.innocent    ❴text❵\n🔮.aah          ❴text❵\n🔮.sir            ❴text❵\n🔮.my3         ❴text❵\n🔮.fuck         ❴text❵\n🔮.hii             ❴text❵\n🔮.asai          ❴text❵\n🔮.hapoi       ❴text❵\n🔮.quby1    ❴text❵\n🔮.quby2    ❴text❵\n🔮.quby3    ❴text❵\n🔮.quby4    ❴text❵\n🔮.cat1    ❴text❵\n🔮.cat2    ❴text❵\n🔮.cat3    ❴text❵\n🔮.cat4    ❴text❵\n🔮.trollikka1    ❴text❵\n🔮.trollikka2    ❴text❵\n🔮.trollikka3    ❴text❵\n🔮.trollikka4    ❴text❵\n\n╚═══❖══▣══▣══❖═══╝\n\n▷Re Moded By: Ameer Suhail*\n*▷Specιal Thanks to ιnѕane вoy*"

if (Config.WORKTYPE == 'public') {

  Shazz.addCommand({ pattern: 'miasay ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/phub?apikey=4PXD3f97yHgcO8aOD5GGIsEJB6l&img=https://www.filmibeat.com/wimgm/500x70/mobi/2017/11/mia-khalifa_1510989398130.jpg&username=Mia%20Khalifa&msg=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  })

  }));
 
  Shazz.addCommand({ pattern: 'innocent ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=_&bottom=${encodeURIComponent(match[1])}&img=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQkaloSZfYPpDnfiOzGISBYT3fdSc0-6cvg&usqp=CAU`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.jpg, caption: '*🚀Made by luttapi*' })

  }));
