const express = require('express');
const app = express();

app.use((req, res)=>{
    console.log('===================================================');
    console.log('req', req);
    console.log('===================================================');
})

app.get('/api/timestamp', (req, res) => {
    const dateString = new Date(); 
    res.send({"unix": dateString.getTime(), "utc" : dateString.toUTCString() });
});

app.get('/api/timestamp/:date_string', (req, res) => {
    const dateString = new Date(req.params.date_string).toString() === 'Invalid Date' ? 
        new Date(+req.params.date_string) : 
        new Date(req.params.date_string);

    if(dateString.toString() === 'Invalid Date') {
        res.send({error: 'Invalid Date'});
    } else {
        res.send({"unix": dateString.getTime(), "utc" : dateString.toUTCString() });
    }
});

app.listen(3000, ()=>{
    console.log('===================================================');
    console.log('ready and running');
    console.log('===================================================');
});
