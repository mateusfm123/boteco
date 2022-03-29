require('dotenv').config()

const Client  = require('./src/structures/Client')

const client = new Client({
    itents: [

    ]
})

client.login(process.env.BOT_TOKEN)