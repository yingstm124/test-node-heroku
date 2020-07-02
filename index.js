const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('test node heroku is OK !!');
});

app.listen(PORT, () => {
    console.log(`${PORT} is working !!!!!`);
});