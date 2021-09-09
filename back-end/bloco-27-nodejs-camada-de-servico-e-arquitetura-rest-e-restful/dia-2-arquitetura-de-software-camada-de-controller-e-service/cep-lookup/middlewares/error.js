module.exports = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({
        error: {
          message: err.details[0].message
        } });
  }

  // Verifica se é um erro de domínio
  if(err.code) {
    const statusByErrorCode = { notFound: 404, alreadyExists: 409 }
    
    // Utiliza-se o código do erro para determina qual o status code adequado
    const status = statusByErrorCode[err.code] || 500;
    
    // Envia o status code e o error como resposta
    res.status(status).json(err);
  }

  // Se não for erro de domínio, envia-se uma resposta de erro desconhecido
  console.error(err);
  res.status(500)
    .json({error: {
      code: 'internal',
      message: 'Internal server error' } });
};