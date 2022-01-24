const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// this is almost a hello world to an API coding
app.get('/ping', (_req, res) => res.status(200).json({message: 'pong!'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
