import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { User } from './src/models/user.model';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const createUser = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const email = 'test@example.com';
    const password = 'password123';

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log('User already exists');
      return process.exit(0);
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashed });
    await user.save();

    console.log('✅ Test user created:');
    console.log({ email, password });
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating user:', err);
    process.exit(1);
  }
};

createUser();
