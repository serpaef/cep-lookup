const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.get('/cep/:cep', (req, res) => {
  const { cep } = req.params;
  // Is `cep` in a valid format?
  const cepFormat = /\d{5}-?\d{3}/;
  if(cepFormat.test(cep)) return res.status(200).json({ message: 'CEP is valid!'})
  
  return res.status(400).json({ message: 'try a valid CEP format'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
