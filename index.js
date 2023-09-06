const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    const item = {'item': 'clothe'}
    res.send(item)
})

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}/`)
);