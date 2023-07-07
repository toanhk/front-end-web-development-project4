var path = require('path')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
console.log(__dirname)

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);
const API_KEY = process.env.API_KEY


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/call', callAPI);


async function callAPI(req, res) {

    var FormData = require('form-data');
    console.log(req.body.data);

    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("txt", req.body.data);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const fetch = require('node-fetch');
    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(respons => respons.json())
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(error => console.log('error', error));

}
