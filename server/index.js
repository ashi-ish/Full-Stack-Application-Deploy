import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/api/message', (req, res) => {
  res.json({message: 'Hello from the server!'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});