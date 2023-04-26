require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');

const usersRoutes = require('./routes/users');

const middlewarelogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();

app.use(middlewarelogRequest);
app.use(express.json());
app.use('/assets', express.static('public/img'));

app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload berhasil',
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: 'Ukuran File Terlalu Besar. Tidak boleh lebih dari 3MB',
  });
});

app.listen(PORT, () => {
  console.log(`server berhasil di runnng di port ${PORT}`);
});
