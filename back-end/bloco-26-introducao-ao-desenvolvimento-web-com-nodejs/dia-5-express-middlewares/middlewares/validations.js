function validateUsername(req, res, next) {
  const {username} = req.body;

  if(!username || username.length < 3) return res.status(400).json({message: 'invalid data'});

  next();
}

function validateEmail(req, res, next) {
  const {email} = req.body;
  const validate = /\S+@\S+\.\S+/;

  if(!email || !validate.test(email)) return res.status(400).json({message: 'invalid data'});
  next();
}

function validatePassword(req, res, next) {
  const {password} = req.body;

  if(password.length < 4 || password.length > 8) return res.status(400).json({message: 'invalid data'});
  
  next();
}

module.exports = {validateUsername, validateEmail, validatePassword}