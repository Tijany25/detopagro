// api/login.ts
import * as bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../db';
import User from '../model/userModel'; // Assuming your user model path


interface LoginRequest {
  username: string;
  password: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body as LoginRequest;

  try {
    await connectDB(); // Connect to database
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    // Handle successful login (e.g., create a session or JWT token)
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default handler;
