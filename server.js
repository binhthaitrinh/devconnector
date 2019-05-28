const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API running'));

// look for environment var called PORT, when deployed on heroku it'll get that var, or 5000 if localhost
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
