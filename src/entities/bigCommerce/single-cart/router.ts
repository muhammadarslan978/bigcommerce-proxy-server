import express from 'express';

import controller from './controller';

const router = express.Router();

router.post('/custom-cart', controller.create);

export default router;
