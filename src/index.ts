import express from 'express';
import path from 'path';
import { getCounter, incrementCounter } from './counter.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname)

app.use(express.static(path.join(__dirname, '../dist')));

// Basic route
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/api/incrementCounter', (_req, res) => {
    const incrementedCount = incrementCounter();
    res.json({ counter: incrementedCount })
})

app.get('/api/getCounter', (_req, res) => {
    const currentCount = getCounter();
    res.json({ counter: currentCount })
})

// Start the server
app.listen(PORT, () => {
    console.log("hello hello hlelo")
    console.log(`Server is running at http://localhost:${PORT}`);
});