const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware untuk meng-handle JSON body pada request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menyajikan file statis dari direktori 'frontend'
app.use(express.static(path.join(__dirname, '../frontend')));

// Route untuk menangani permintaan ke root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Endpoint untuk contoh API sederhana
app.get('/api/example', (req, res) => {
    res.json({ message: 'Ini adalah contoh API sederhana.' });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});
