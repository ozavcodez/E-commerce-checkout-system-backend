import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("❌ MONGO_URI not found in environment variables");
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });
