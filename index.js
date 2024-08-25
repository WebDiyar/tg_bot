const { Telegraf } = require('telegraf');
require('dotenv').config();

const TOKEN = "7336290672:AAFP-CwXoPvxBSTJpGeywBexogo0ax0OJRE";
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-mini-app-sigma-seven.vercel.app/";

// Bot logic
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