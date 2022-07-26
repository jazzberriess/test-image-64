import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
import itemRoutes from './router/index.js';
app.use('/items', itemRoutes);
app.get('/', (req, res) => {
  res.send('Hello');
});
const mongodb = 'mongodb+srv://leoelicos:northshore@clusterbooksearchengine.usgeluz.mongodb.net/image-database?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err));
