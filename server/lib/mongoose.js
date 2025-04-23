import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  if (isConnected) return

  const config = useRuntimeConfig()
  await mongoose.connect(config.mongoUri)
  isConnected = true
}
