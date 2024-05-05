// user.model.ts
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next(); // Skip hashing if password hasn't changed

//   const saltRounds = 10; // Adjust salt rounds as needed
//   const salt = await bcrypt.genSalt(saltRounds);
//   const hash = await bcrypt.hash(this.password, salt);

//   this.password = hash;
//   next();
// });


export default mongoose.models.User || mongoose.model("User", userSchema);
