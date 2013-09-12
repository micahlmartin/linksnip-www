var express = require('express')
var linksnip = require('linksnip')

app = express()

app.get('/', function(req, res) {
    linksnip(req.query.url, function(data) {
        res.send(data);
    })
})

app.listen(9050)