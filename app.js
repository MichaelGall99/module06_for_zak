import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'

// ORIGINAL CODE
//import {} from './db/connect.js'

// REFACTORED CODE (so import now uses the 'connectDB' function from './db/connect.js')
import connectDB from './db/connect.js'

// In order to use the body-parser middleware with our app, we need to first import it in our "apps.js" file
import bodyParser from 'body-parser'

const app = express()

// IMPORTANT:  We must setup the 'bodyParser.json()' middleware BEFORE our routes (otherwise, it won't work)
app.use(bodyParser.json())

// LOAD ROUTES INTO OUR MAIN FILE
app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 5000

// ORIGINAL CODE
//app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// REFACTORED CODE (using an 'init' asynchroous function which supports await and a try/catch block)
const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch {
        console.log(`ERROR: ${err}`)
    }
}
init()
