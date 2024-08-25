const { Telegraf } = require('telegraf');
require('dotenv').config();

const TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(TOKEN);

const web_link = process.env.WEB_LINK;

bot.start((ctx) => {
    ctx.reply('Welcome! Click the button below to open the web app:', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: { url: web_link }
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.on('message', (ctx) => {
    if (ctx.message.text !== '/start') {
        ctx.reply('To get started, click the button below:', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Open Web App',
                            web_app: { url: web_link }
                        }
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        });
    }
});

bot.launch();
