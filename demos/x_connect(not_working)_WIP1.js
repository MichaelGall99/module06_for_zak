'use strict';

import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

console.log('inside connect.js - debug 1')

// CONNECT TO DATABASE
//MongoClient.connect(process.env.DB, (err, database) => {
// MongoClient.connect('mongodb+srv://mike:vecta@vectacluster.tjhwwwy.mongodb.net/?retryWrites=true&w=majority', (err, database) => {
//     if (err) {
//         throw err
//         console.log(`MongoClient.connect error: ${err}`)
//     }
//     console.log('Connected to database...')
// })

// MongoClient.connect(process.env.DB, (err, database) => {
//     console.log('inside connect.js - debug 2')
//     //if (err) throw err
//     //console.log('Connected to database...')
// })

//https: / / stackoverflow.com/questions/46427457/mongoclient-connect-doesnt-execute-callback-function
//https: / / www.mongodb.com/docs/atlas/troubleshoot-connection/
MongoClient.connect(process.env.DB, function(err, db) {
    if (err) {
        throw err
    } else {
        console.log('Connected to database...')
    }
    // db.close();
})

console.log('inside connect.js - debug 3')
