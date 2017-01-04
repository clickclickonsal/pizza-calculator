var pizzaCalculator = require('./pizza-calculator');
module.exports = {
    init: function (controller, bot) {
        controller.hears([/^(how much pizza|how many pizzas) (should I order|do I need) for (.*)( guests)?\??$/i], ['direct_mention', 'direct_message'], (bot, message) => {
            let pizzaCount = parseInt(message.match[3], 10);
            if(!isNaN(pizzaCount)) {
                bot.reply(message, 'You should order '+pizzaCalculator(pizzaCount)+' pizzas.');
            }else{
                bot.reply(message, 'I need a number for guest count');
            }
        });
    },
    help: {
        command: 'pizza',
        text: 'Calculates number of pizza for specified number of guests, ask in the form of:\n\n'+
            '_how many pizzas should I order for 12?_'
    }
};
