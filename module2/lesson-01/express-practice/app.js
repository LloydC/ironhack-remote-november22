const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const me = {name: 'Lloyd Chambrier'}
    // res.json(me);
    res.send('<h1> Homepage </h1>')
})

app.listen(port, () => console.log(`App is listening on port ${port}`))