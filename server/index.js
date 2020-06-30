const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const port = 5000;
app.listen(port, console.log(`Listening on http://localhost:${port}`));