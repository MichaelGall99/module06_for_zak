//  INSERT A DOCUMENT      
import { MongoClient } from "mongodb";
import {} from 'dotenv/config'

// REPLACE THE URI STRING WITH YOUR MONGODB DEPLOYMENT'S CONNECTION STRING
const uri = process.env.DB

// CREATE A NEW CLIENT AND CONNECT TO MONGODB 
const client = new MongoClient(uri);
async function run() {
  try {
    // CONNECT TO THE "VECTACORP" DATABASE AND ACCESS ITS "EMPLOYEES" COLLECTION 
    const database = client.db("vectacorp");
    const employees = database.collection("employees");
    
    // CREATE A DOCUMENT TO INSERT 
    const doc = {
        name: 'Jaye Brooke',
        extension: 1111,
        email: 'Administrative Assistant',
        dateHired: Date.now(),
        currentlyEmployed: true
    }
    
    //  INSERT THE DEFINED DOCUMENT INTO THE "EMPLOYEES" COLLECTION 
    //console.log(`1 document was inserted.`)
    database.insertOne(doc, (err, res) => {
      if (err) throw err
      console.log('1 document inserted')
      database.close()
    })

  } finally {
    // CLOSE THE CONNECTION AFTER THE OPERATION COMPLETES 
    await client.close();
  }
}
// RUN THE PROGRAM AND PRINT ANY THROWN ERRORS 
run().catch(console.dir);