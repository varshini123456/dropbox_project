const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
const PORT = 5000;

cors({credentials:true,origin:true})
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin ")
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Connect to MongoDB
mongoose
  .connect('mongodb+srv://varshini123456:varshini23@cluster0.n0vlfjz.mongodb.net/dropbox?retryWrites=true&w=majority&appName=Cluster0', {
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const fileRoutes = require('./routes/fileRoutes');
app.use('/', fileRoutes);

