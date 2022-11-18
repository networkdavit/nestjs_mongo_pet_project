import * as dotenv from 'dotenv';
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

export const jwtConstants = {
  secret: JWT_SECRET,
}
