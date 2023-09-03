module.exports = (message, client) => {
    if (message.content === 'Hey nothuggiewuggies!') {
        message.reply(`Hello ${message.user}`)
    }
};