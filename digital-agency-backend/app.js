const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const secretKey = 'HELLOMYNAMEISASHISHTOMAR';

app.use(bodyParser.json());
app.use(cors());
const users = [
  { id: 1, username: 'Ashish8006', password: '123456' },
  { id: 2, username: 'vishu', password: '123456' },
  { id: 3, username: 'anuj', password: '123456' },
];


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the server!</h1>`);
});

app.get('/api/data', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data accessed successfully' });
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Token missing' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.error('Token verification error:', err.message);
            console.error('Stack trace:', err.stack);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            } else {
                return res.status(401).json({ error: 'Token verification failed' });
            }
        }

        console.log('Decoded Token:', user);
        req.user = user;
        next();
    });
}




// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.sendStatus(401);

  const accessToken = jwt.sign(user, secretKey, { expiresIn: '1h' });
  res.json({ accessToken });
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
