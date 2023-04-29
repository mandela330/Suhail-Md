const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');


cmd({
        pattern: "waifu",
        desc: "To get Waifu Random Pics",
        category: "Anime Chars",
        filename: __filename
    },

    async(Void, citel, text) => {


  const response = await fetch('https://api.waifu.pics/sfw/neko');
  const data = await response.json();
  
                let buttonMessaged = {
                    image: { url: data.url },
                    caption: '*---Waifu Pics Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
}
    )

//-----------------------------------------------------------------------