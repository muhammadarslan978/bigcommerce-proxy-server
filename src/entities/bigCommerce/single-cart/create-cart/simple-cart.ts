import fetch from 'node-fetch';
import { config } from '../../../../config/index';

console.log('this is config', config);

export class CurrencyDto {
  code!: string;
}

export class LineItemDto {
  quantity!: number;
  product_id!: number;
  list_price!: number;
  name!: string;
}

export class CreateOrderDto {
  customer_id!: number;
  line_items!: LineItemDto[];
  channel_id!: number;
  currency!: CurrencyDto;
  locale!: string;
}

async function createSimpleCart(dto: CreateOrderDto): Promise<any> {
  const url = `${config.bigCommUrl}/stores/${config.store_hash}/v3/carts`;

  console.log('url', url);

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Auth-Token': config.apiToken,
    },
    body: JSON.stringify(dto),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    console.log('Cart created successfully:', JSON.stringify(json));
    return json;
  } catch (err) {
    console.error('Error creating cart:', err);
  }
}

const sampleCartDto: CreateOrderDto = {
  customer_id: 69006,
  line_items: [
    {
      quantity: 2,
      product_id: 126,
      list_price: 200,
      name: 'calendar',
    },
  ],
  channel_id: 1,
  currency: {
    code: 'USD',
  },
  locale: 'en-US',
};

(async () => {
  await createSimpleCart(sampleCartDto);
})();
