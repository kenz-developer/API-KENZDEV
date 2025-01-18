const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); // Untuk parsing JSON

// Endpoint GET
app.get('/alzz', (req, res) => {
    res.json([
        { 
          "status": "false",
          "query": "Halo Saya Bot Ai By Kenz"
        }
    ]);
});

// Endpoint POST
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json(newUser); // Menambahkan user baru
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});