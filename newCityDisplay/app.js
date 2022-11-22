const express = require('express');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5969737965:AAEB3RIoPGmxjGv6IDDyGb0whF1dwdxuplY');
const app = express();

bot.start((ctx)=>{
    ctx.reply(`Which city do you want to look at ${ctx.from.username}`)
})


bot.launch()
module.exports = app