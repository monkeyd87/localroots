// models/User.js
import mongoose, { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    default: 'buyer' // Default role is buyer
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


UserSchema.pre('save',async function(next){
  const salt = 10
  if(this.isNew || this.isModified('password')){
      return this.password = await  bcrypt.hash(this.password,salt)
  }
  next()
  
})

UserSchema.methods.isCorrectPassoword = async function(password) {
    return bcrypt.compare(password,this.password)
}


const User = models.User || model('User', UserSchema);
export default User;
