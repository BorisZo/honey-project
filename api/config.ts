import path from 'path';
import * as dotenv from 'dotenv';

const pathEnvFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

const rootPath = __dirname;
dotenv.config({path: pathEnvFile});

const config = {
  rootPath,
  publicPath: path.join(rootPath, 'public'),
  port: parseInt(process.env.PORT || '8000'),
  db: process.env.DB_HOST || 'mongodb://localhost/honey',
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  }, 
};

export default config;
