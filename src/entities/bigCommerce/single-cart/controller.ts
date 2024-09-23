import { Request, Response } from 'express';

import {
  createCustomiseCart,
  formatDataToCreateOrderDto,
  CreateOrderDto,
} from './create-cart/custom-cart';

export default {
  create: async (req: Request, res: Response) => {
    try {
      const formattedData: CreateOrderDto = formatDataToCreateOrderDto(
        req.body
      );
      const cart = await createCustomiseCart(formattedData);
      res.status(201).json(cart);
    } catch (error: any) {
      const status = error.status || 500;
      res.status(status).json({
        message: error.message || 'Internal server error',
        details: error.details || null,
      });
    }
  },
};
