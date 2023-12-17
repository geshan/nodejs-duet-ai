const express = require('express');

const app = express();
const port = 8088 || process.env.PORT;

app.get('/', (req, res) => {
  res.send({ message: 'ok' });
});

app.get('/posts', (req, res) => {
  const posts = [
    {
      title: 'Post 1',
      content: 'This is the content of post 1.'
    },
    {
      title: 'Post 2',
      content: 'This is the content of post 2.'
    },
    {
      title: 'Post 3',
      content: 'This is the content of post 3.'
    }
  ];

  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
