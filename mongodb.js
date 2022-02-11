const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb+srv://admin:DjnjBU08NfMSQ5yP@twitterclonecluster.jgu4e.mongodb.net/TaskManager?retryWrites=true&w=majority'

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (error, client) => {

    if(error) {
        console.log('Unable to connect to database')
    }

    console.log('Connected correctly!')
})