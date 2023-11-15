import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'
const uri = process.env.DB
const client = new MongoClient(uri)
async function updateOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        let database = client.db('vectacorp')
        let query = { name: 'Konnor Welch'}
        let queryUpdate = { $set: { name: 'Michael Gall', email: 'mike@vectacorp.com'} }

        // IMPORTANT:  "Daisy-Chain" the .collection method infront of the .updateOne method
        const result = await database
            .collection('employees')
            .updateOne(query, queryUpdate)
            console.log(result)
            console.log('1 document updated')
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
updateOne()
