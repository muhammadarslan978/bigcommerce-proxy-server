import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  bigCommUrl: string;
  apiToken: string;
  store_hash: string;
}

export const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  bigCommUrl: process.env.BIGCOM_URL
    ? process.env.BIGCOM_URL
    : 'https://api.bigcommerce.com',
  apiToken: process.env.API_TOKEN ? process.env.API_TOKEN : '',
  store_hash: process.env.STORE_HASH ? process.env.STORE_HASH : '',
};
