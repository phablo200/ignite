import express from 'express';
import { router } from './routes';

const app = express();
// Parse JSON
app.use(express.json());
app.use(router);

app.listen(3334, () => {
  console.log('BACKEND running on port 3334');
});
