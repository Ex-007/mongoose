import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)

  if (!id) return { error: 'User ID is required' }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    })

    if (!updatedUser) {
      return { error: 'User not found' }
    }
    return updatedUser
  } catch (err) {
    return { error: 'Failed to update user', details: err }
  }
})
