import { connectToDB } from '../../lib/mongoose'
import User from '../../models/User'

export default defineEventHandler(async (event) => {
  await connectToDB()
  const body = await readBody(event)
  const newUser = await User.create(body)

//   console.log(newUser)
  return newUser
})
