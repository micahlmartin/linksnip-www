var express = require('express')
var linksnip = require('linksnip')

app = express()

app.get('/', function(req, res) {
    url = req.query.url;
    console.log("Received request for " + url)
    try {
        linksnip(url, function(data) {
            console.log(data)
            console.log("Successfully parsed " + url)
            res.json(data);
        })
    } catch(e) {
        console.log(e)
    }
})

port = process.env.PORT || 9050

app.listen(port, function() {
    console.log("Listening on " + port)
})