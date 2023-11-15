import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB
const client = new MongoClient(uri)

async function retrieveAll() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('sample_airbnb')   //<YOURDATABASE>
        let result = await database
            .collection('listingsAndReviews')       //<YOURCOLLECTION>
            .find({})
            .toArray()
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

retrieveAll()
