import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb';
import Register from '@/models/Register';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, usn, branch, semester } = req.body;

    try {
      await connectToDatabase();
      const newEntry = await Register.create({ name, email, usn, branch, semester });
      res.status(201).json({ success: true, data: newEntry });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
