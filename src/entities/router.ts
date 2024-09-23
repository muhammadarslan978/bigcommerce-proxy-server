import express from 'express';

import BigCommRouter from './bigCommerce/router';

const router = express.Router();

router.use('/big-commerce', BigCommRouter);

export default router;
