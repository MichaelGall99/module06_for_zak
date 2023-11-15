import { MongoClient, ObjectId } from 'mongodb'
import {} from 'dotenv/config'
const uri = process.env.DB
const client = new MongoClient(uri)
async function deleteOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')
        let database = client.db('vectacorp')
        
        // DELETE BY EMPLOYEE NAME
        //let query = { name: 'Cody Pendant'}

        // DELETE BY OBJECT ID ---- 1st need to import "ObjectId" Class from the 'mongodb' Package (line 1)
        let query = { _id: new ObjectId('6552f50c88d7b1282b1b06dd') }

        // IMPORTANT:  "Daisy-Chain" the .collection method infront of the .updateOne method
        const result = await database
            .collection('employees')
            .deleteOne(query)
            console.log(result)
            console.log('1 document deleted')
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
deleteOne()
