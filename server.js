const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('main'));
app.use(express.static('uxManager'));

app.get('/ux', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'uxManager', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'main', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`start with port ${PORT}`);
});
