const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let totalSeconds = bot.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    message.channel.send(`:sleeping:  Faz **${days} dias, ${hour} horas, ${minutes} minutos, ${seconds} segundos** que estou acordado.\n:yawning_face:  Ai ai, que sono...`)
}

exports.help = {
    name: 'uptime',
    description: 'Informa a quanto tempo o bot está online.'
}