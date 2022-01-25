function validateFormat(cep) {
  const cepFormat = /\d{5}-?\d{3}/;
  if(cepFormat.test(cep)) return true;
  return false;
}

module.exports = {
  validateFormat,
};
