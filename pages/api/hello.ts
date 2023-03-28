import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req, res) {
//   res.status(200).json({ text: 'hello' });
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'hello' });
};
