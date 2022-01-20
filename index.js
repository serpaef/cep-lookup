const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
