import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const name = query.name

  if (!name) return { error: 'Name is required' }

  const users = await User.find({ name })
  console.log(users)
  return users
})
