const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
