// api/login.ts
import * as bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../db';
import User from '../model/userModel';
import config from '../../../../env';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'


const secret = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

interface LoginRequest {
  username: string;
  password: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { username, password } = await req.json();

  try {
    await connectDB();
    const user = await User.findOne({ username });
    
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const match = await bcrypt.compareSync(password, user.password);
    
    if (!match) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

    // Handle successful login (e.g., create a session or JWT token)
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
  }