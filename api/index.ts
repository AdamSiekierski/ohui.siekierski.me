import { NowRequest, NowResponse } from '@vercel/node';

const IMAGES = ['ohui1.jpg', 'ohui2.jpg'];

export default function handler(req: NowRequest, res: NowResponse) {
  res.redirect(`https://ohui.siekierski.ml/images/${IMAGES[Math.floor(Math.random() * 2)]}`);
}
