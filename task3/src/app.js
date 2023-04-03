const express = require('express');
const userService = require('../Routes');

const app = express();

app.use('/user', userService);

app.use(express.json());

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('task3');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
