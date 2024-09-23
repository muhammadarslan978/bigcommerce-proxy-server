import express from 'express';

import SingleCartRouter from './single-cart/router';

const router = express.Router();

router.use('/single-cart', SingleCartRouter);

export default router;
