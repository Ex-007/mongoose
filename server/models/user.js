import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // isVerified: Boolean
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', userSchema)
