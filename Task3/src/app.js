const express = require('express');
const userService = require('../Routes/index');

const app = express();

app.use('/user', userService);

app.use(express.json());

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
