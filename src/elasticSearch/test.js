const express = require('express');
const app = express();
const port = 3333;
const elasitcsearch = require('elasticsearch');
const client = new elasitcsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

app.get('/', (req, res) => {
    res.end('???')
})

app.listen(port, () => {
    console.log(`port*${port}`)
})