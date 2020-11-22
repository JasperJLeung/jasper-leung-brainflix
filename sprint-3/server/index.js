const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use('/videos', require('./routes/videoRoutes'))

app.listen(8080, () => {});