import { NowRequest, NowResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

const IMAGES = ['ohui1.jpg', 'ohui2.jpg'];

export default function handler(req: NowRequest, res: NowResponse) {
  const file = path.join(__dirname, IMAGES[Math.floor(Math.random() * 2)]);

  const stat = fs.statSync(file);

  res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Content-Length': stat.size });

  fs.createReadStream(file).pipe(res);
}
