// import line, { Client } from '@line/bot-sdk';
import express from 'express';
import { getTravelRoutes, getMessageReply } from './data';

const line = require('@line/bot-sdk');
const builder = require('botbuilder');
// import getPilihan from '../utils/flex';

const config = {
  channelAccessToken: 'h8E6vA/OvSnqaXcGWOSZIO2/iczjRmtwi8dpTP271gByP6KiP5mZj5q61Hxv/3YGy8ylsv/Gz2ztcxxnmM/5tALgFTXzGOZQ11EeMgJ5Ekmf7bNLIHz/ah202d7nKLbi4N8NGitCkFFFP0TndjY7DgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '66ea46a74c8592d2d6aeba1ec445838e',
};


/*const connector = new builder.ChatConnector({
  appId: '1590552869',
  appPassword: '66ea46a74c8592d2d6aeba1ec445838e',
});*/

// create LINE SDK client
const client = new line.Client(config);
const app = express();
//const inMemoryStorage = new builder.MemoryBotStorage();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      throw new Error(err);
    });
});

let error;

async function handleEvent(event) {
  if (event.message.text === 'hai' && 'Hai') {
    const echo = { type: 'text', text: "Selamat Datang di Official Line Tabook Indonesia!" };
    return client.replyMessage(event.replyToken, echo);
  }
  if (event.message.text === '/keyword') {
    const echo = { type: 'text', text: 'Silahkan ketikkan menu di bawah ini: \n\n- /book  = untuk memesan travel anda\n\n- /event = untuk mengetahui info-info menarik dari Tabook \n\n- /about = untuk penjelesan lebih lanjut mengenai tabook \n\n\n atau dengan memilih menu yang ada di kiri chatbox' };
    return client.replyMessage(event.replyToken, echo);
  }

  if (event.message.text === '/book') {
    const echo = await getTravelRoutes();
    return client.replyMessage(event.replyToken, echo);
  }

  /*if (client.replyMessage(event.replyToken, getTravelRoutes())) {
    const echo = await getMessageReply();  
    //const echo = { type: 'text', text: getTravelRoutes() + '\nSilahkan masukkan sesuai format\ntanggal/alamat-jemput/jumlah-penumpang/no.hp\n\nContoh\n23122018/Jalan Monstera/4/085671345342' };
    return client.replyMessage(event.replyToken, echo);
  }*/

  if (event.message.text === '/Bandara Juanda T1 Domestik-Malang') {
    const echo = { type: 'text', text: 'Anda telah memilih travel dengan rute Bandara Juanda T1 Domestik-Malang\n\nSilahkan masukkan sesuai format\ntanggalkeberangkatan/62c8d087-8012-454f-980f-27f44746d97a/1705b311-cf1a-4046-9d42-1edf9ff00cd3/alamattujuan/jumlahpenumpang/alamatjemput/nomorhp\n\nContoh\n20180729/62c8d087-8012-454f-980f-27f44746d97a/1705b311-cf1a-4046-9d42-1edf9ff00cd3/Bandara Juanda/1/Sigura2 III/082159086790' };
    return client.replyMessage(event.replyToken, echo);
  }

  if (event.message.text === '/Madiun-Malang') {
    const echo = { type: 'text', text: 'Anda telah memilih travel dengan rute Madiun-Malang\n\nSilahkan masukkan sesuai format\ntanggalkeberangkatan/62c8d087-8012-454f-980f-27f44746d97a/3c9cebef-f6d3-4bb9-abf0-efa654deb9b2/alamattujuan/jumlahpenumpang/alamatjemput/nomorhp\n\nContoh\n20180729/62c8d087-8012-454f-980f-27f44746d97a/3c9cebef-f6d3-4bb9-abf0-efa654deb9b2/Bandara Juanda/1/Sigura2 III/082159086790' };
    return client.replyMessage(event.replyToken, echo);
  }

  if (event.message.text === '/Malang-Bandara Juanda T1 Domestik') {
    const echo = { type: 'text', text: 'Anda telah memilih travel dengan rute Malang-Bandara Juanda T1 Domestik\n\nSilahkan masukkan sesuai format\ntanggalkeberangkatan/1705b311-cf1a-4046-9d42-1edf9ff00cd3/62c8d087-8012-454f-980f-27f44746d97a/alamattujuan/jumlahpenumpang/alamatjemput/nomorhp\n\nContoh\n20180729/1705b311-cf1a-4046-9d42-1edf9ff00cd3/62c8d087-8012-454f-980f-27f44746d97a/Bandara Juanda/1/Sigura2 III/082159086790' };
    return client.replyMessage(event.replyToken, echo);
  }

  if (event.message.text === '/event') {
    const echo = { type: 'text', text: 'Mohon maaf, menu ini masih dalam pengembangan' };
    return client.replyMessage(event.replyToken, echo);
  }

  const echo = { type: 'text', text: `Keyword Salah. Silahkan ketikkan /keyword  ${error}` };
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// This is a dinner reservation bot that uses a waterfall technique to prompt users for input.
// Register in-memory storage
