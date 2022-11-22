const express = require('express')
const app = express() 

const {Telegraf} = require('telegraf')

const bot = new Telegraf('5827772321:AAESOkHChGPqv0fBs7J11WlSLQF4kPbAfYw')

const helpMessage = `
Say something to me
/start - start the bot
/help - command references
/echo - I am an echo bot
/echo <msg> - echo a message 
`
bot.use((ctx,next)=>{
    console.log(ctx.message.chat.id)
    bot.telegram.sendMessage(-835263804,`${ctx.from.username} said ${ctx.message.text}`)
    // console.log(`${ctx.from.username} said ${ctx.message.text}`)
    next()
})

bot.start((ctx)=>{
    ctx.reply("Hi am echo bot")
    ctx.reply(helpMessage)
})

bot.help((ctx)=>{
    ctx.reply(helpMessage)
})

bot.command('echo',(ctx)=>{
    let input = ctx.message.text;
    let inputArray = input.split(" ")
    let message = " "
    if (inputArray.length == 1){
        message = "You said echo"
    }else{
        inputArray.shift()
        message = inputArray.join(" ")
    }
    ctx.reply(message)
})


bot.launch()


module.exports = app

