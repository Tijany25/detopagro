import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import User from '../model/userModel'; // Assuming your user model path
import connectDB from '../db';
import config from '../../../../env';


export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
        await connectDB(); // Connect to database
    
        const superadminUsername = config.SUPERADMIN_USERNAME;
        const superadminPassword = config.SUPERADMIN_PASSWORD;

        console.log(superadminUsername, superadminPassword);
        
        
    
        if (!superadminUsername || !superadminPassword) {
          return NextResponse.json({ error: 'Missing superadmin credentials in environment variables' }, { status: 500 });
        }
    
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(superadminPassword, salt);
    
        const user = new User({
          username: superadminUsername,
          password: hash,
        });
    
        await user.save();
        return NextResponse.json({ message: 'Super admin created successfully' });
      } catch (error) {
        console.error('Error creating super admin:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
}
