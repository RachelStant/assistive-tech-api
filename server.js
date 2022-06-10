import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import lendingRouter from './routes/lendingLibrary.js';
import path from 'path';
const __dirname = path.resolve();
const PORT = process.env.PORT || 8000




const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(express.static(__dirname + '/img'))


app.use('/api/lending-libraries', lendingRouter)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})


