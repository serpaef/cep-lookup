require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { validateFormat } = require('./services/validationServices');

const app = express();

app.get('/cep/:cep', (req, res) => {
  const { cep } = req.params;
  // Is `cep` in a valid format?
  if (validateFormat(cep)) return res.status(200).json({ message: 'CEP is valid!'})
  return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
