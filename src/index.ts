import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import { errorHandler } from './middleware/errorHandler';
import router from './entities/router';

config();

const app: Application = express();
const PORT: Number = 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'api is working...' });
});

app.use('/api/v1', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`app is up on port ${PORT}`);
});
