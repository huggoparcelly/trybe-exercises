const fs = require('fs');

function escreveEmAquivo(nomeArquivo, conteudo) {
  fs.writeFileSync(`./${nomeArquivo}`, conteudo)
  return 'ok';
}

module.exports = escreveEmAquivo;