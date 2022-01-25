const cepModel = require('../models/cep');

async function findByCEP(cep) {
  const cepData = await cepModel.findByCEP(cep);
  return cepData;
}

function validateFormat(cep) {
  const cepFormat = /\d{5}-?\d{3}/;
  if(cepFormat.test(cep)) return true;
  return false;
}

module.exports = {
  validateFormat,
  findByCEP,
};
