require('dotenv').config()
var express = require('express'),
    app = express(),
    notifier = require('node-notifier'),
port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({'info':'This is the server'})
})
app.post('/api/v1', (req, res) => {
    notifier.notify({
        title: req.body.title,
        message: req.body.message
      });  
})
app.listen(port, () => console.log(`server running at ${port}`))

