const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(cors());

app.use('/users', (req, res) => {
    res.status(400).send({ message: 'Success!', data: 'got it' });
});

app.listen(PORT, () => {
    console.log(`server live at http://localhost:${PORT}`);
});
