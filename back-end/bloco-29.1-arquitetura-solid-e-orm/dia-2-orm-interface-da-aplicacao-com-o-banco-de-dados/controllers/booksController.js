const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/books', async(req, body) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

router.get('/book/:id', async(req, body) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if(!book) return res.status(404).json({message: 'Livro não encontrado'});
    
    return res.status(200).json(book);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

router.get('/book/:author', async(req, body) => {
  try {
    const { author } = req.params;
    const book = await Book.findOne({ where: { author }});

    if(!book) return res.status(404).json({message: 'Livro não encontrado'});
    
    return res.status(200).json(book);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

router.post('/book', async(req, body) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

router.put('/book/:id', async(req, body) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [bookUpdate] = await Book.update(
      { title, author, pageQuantity }, 
      { where: { id } }
    );

    if(!bookUpdate) return res.status(404).json({message: 'Livro não encontrado'});

    return res.status(201).json({ message: 'Livro atualizado com sucesso!' });
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

router.delete('/book/:id', async(req, body) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } }
    );

    if(!deleteBook) return res.status(404).json({message: 'Livro não encontrado'});

    return res.status(200).json({ message: 'Livro deletado com sucesso!' });
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: 'Algo errado não está certo!'});
  };
});

module.exports = router;