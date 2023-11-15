import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'
const uri = process.env.DB
const client = new MongoClient(uri)
async function insertOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        let database = client.db('vectacorp')
        let employee = {
            name: 'Cody Pendant',
            extension: 1116,
            email: 'cody@vectacorp.com' //,
            // title: 'CFO',
            // dateHired: Date.now(),
            // currentlyEmployed: true
        }

        // IMPORTANT:  "Daisy-Chain" the .collection method infront of the .insertOne method
        const result = await database
            .collection('employees')
            .insertOne(employee)
            console.log(result)
            console.log('1 document inserted into collection.')
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
insertOne()