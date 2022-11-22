const express = require('express');
const {Telegraf} = require('telegraf');
const bot = new Telegraf('5969737965:AAEB3RIoPGmxjGv6IDDyGb0whF1dwdxuplY');
const app = express();
const newyork = ["images/New York/pexels-cameron-casey-1722183.jpg",
                 "images/New York/pexels-james-wheeler-1519088.jpg",
                 "images/New York/pexels-jose-francisco-fernandez-saura-802024.jpg",
                 "images/New York/pexels-lukas-kloeppel-466685.jpg",
                 "images/New York/pexels-michał-ludwiczak-1239162.jpg",
                 "images/New York/pexels-misael-garcia-1707820.jpg",
                 "images/New York/pexels-pixabay-290595.jpg",
                 "images/New York/pexels-quintin-gellar-313782.jpg",
                 "images/New York/pexels-sergio-souza-3640993.jpg"]
const beijing = ["images/Beijing/juniperphoton-zgsC4lTn7W8-unsplash.jpg",
                 "images/Beijing/pexels-magda-ehlers-2845940.jpg",
                 "images/Beijing/pexels-sabel-blanco-1486577.jpg",
                 "images/Beijing/pexels-shuaizhi-tian-7836406.jpg",
                 "images/Beijing/pexels-zhang-kaiyv-1434580.jpg",
                 "images/Beijing/pexels-zhang-kaiyv-5067337.jpg",
                 "images/Beijing/pexels-zhang-kaiyv-5106090.jpg",
                 "images/Beijing/pexels-zhang-kaiyv-6339175.jpg",
                 "images/Beijing/zhang-kaiyv-yLuhts-KQmU-unsplash.jpg"]
bot.start((ctx)=>{
    ctx.reply(`Which city do you want to look at ${ctx.from.username}`)
})
bot.command(['New York','NewYork','new york','newyork'],ctx=>{
   newyork.forEach((element) => {
    bot.telegram.sendPhoto(ctx.chat.id,{source: `${element}`})
   });
})


bot.launch()
module.exports = app