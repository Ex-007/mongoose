import { connectToDB } from '../../lib/mongoose'
import User from '../../models/User'

export default defineEventHandler(async () => {
    await connectToDB()
    const users = await User.find()
    // console.log(users)
    return users
  })