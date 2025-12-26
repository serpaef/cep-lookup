const connection = require('./connection');

async function findByCEP(cep) {
  const query = 'SELECT * FROM cep_info WHERE cep = ?'
  const [cep] = await connection.execute(query, [cep])
  return cep[0];
}

module.exports = {
  findByCEP,
};
