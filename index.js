const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NzAzODU0NzI2MDUxMTM1NDg4.XqU4fg.-sB8yHW-OH3-ZI5l7vtIcZvUGOc';

const PREFIX = '!';

bot.on ('ready', () => {
    console.log('this bot is online!');
})

bot.on('message', Message=>{
    if(Message.content ===  "سلام"){
        Message.channel.send('علیک');
    }
})

bot.on('message', Message=>{
    if(Message.content ===  "خوبی"){
        Message.channel.send('اره');
    }
})

bot.on('message', Message=>{
    if(Message.content ===  "چخبر"){
        Message.channel.send('سلامتی');
    }
})

bot.on('message', Message=>{
    if(Message.content ===  "چطوری؟"){
        Message.channel.send('عالیم :blush:');
    }
    if(Message.content ===  "چطوری"){
        Message.channel.send('عالیم :blush:');
    }
})

bot.on('message', Message=>{

    let args =Message.content.substring(PREFIX.length).split(" ");
})

bot.on('message', Message=>{
    if(Message.content ===  "اسمت چیه"){
        Message.channel.send('(اسمم  (اونی که همرو دوست داره');
    }
    if(Message.content ===  "اسمت چی"){
        Message.channel.send('(اسمم  (اونی که همرو دوست داره');
    }
})

bot.login(token);