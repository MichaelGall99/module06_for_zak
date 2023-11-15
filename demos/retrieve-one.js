import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB
const client = new MongoClient(uri)

// RETRIEVE ONE
async function retrieveOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('vectacorp')     //<YOURDATABASE>
        let result = await database
            .collection('employees')              //<YOURCOLLECTION>
            .findOne({})
            //.toArray()                          //IMPORTANT:  Because only one document is returned, we do not convert the results to an Array
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

// QUERY
async function retrieveOneQuery(query) {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('vectacorp')     //<YOURDATABASE>
        let result = await database
            .collection('employees')              //<YOURCOLLECTION>
            .find(query)
            .toArray()
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}


//retrieveOne()

let query = { name: 'Cody Pendant' }
retrieveOneQuery(query)
