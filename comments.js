// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Create comments array
const comments = [
  {
    id: 1,
    username: 'Alice',
    comment: 'I love it!'
  },
  {
    id: 2,
    username: 'Bob',
    comment: 'Good job!'
  }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send('Comment added');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments[index] = newComment;
    res.send('Comment updated');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Test with curl
// $ curl http://localhost:3000/comments
// $ curl http://localhost:3000/comments/1
// $ curl -X POST -H "Content-Type: application/json" -d '{"id": 3, "username": "Charlie", "comment": "Awesome!"}' http://localhost:3000/comments
//