const upload = (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
};

module.exports = upload;