import {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Samuel' },
    { id: 2, name: 'Ótton' },
    { id: 3, name: 'Emanuel' },
    { id: 4, name: 'Anderson' },
    { id: 5, name: 'Estopinha' },
  ];

  return res.json(users);
}