const db = require('./data/db');
const express = require('express');
const server = express();
server.use(express.json());

server.get('/notes', (req, res) => {
  db('notes')
    .then((notes) => {
      res.status(200).json(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post('/notes', (req, res) => {
  const note = req.body;
  if (!note.title || !note.text)
    res.status(400).json({ errorMessage: 'Provide a title and text please' });
  db('notes')
    .insert(note)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

const port = 5000;
server.listen(port, () => {
  console.log(`server on http://localhost:${port}`);
});
