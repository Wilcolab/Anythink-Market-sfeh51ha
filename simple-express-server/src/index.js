const express = require('express');

const app = express();
app.use(express.json());

const PORT = 8001;

// Initial tasks copied from the Python FastAPI implementation
const tasks = [
  'Write a diary entry from the future',
  'Create a time machine from a cardboard box',
  'Plan a trip to the dinosaurs',
  'Draw a futuristic city',
  'List items to bring on a time-travel adventure',
];

// GET / -> simple health/hello endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /tasks -> return tasks list
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// POST /tasks -> accept { text: string } and append to tasks
app.post('/tasks', (req, res) => {
  const { text } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ message: 'Invalid payload: expected { text: string }' });
  }

  tasks.push(text);
  return res.json({ message: 'Task added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});