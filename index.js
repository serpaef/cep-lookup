const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.get('/cep/:cep', (req, res) => {
  return res.status(200).json({ message: 'WIP'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
