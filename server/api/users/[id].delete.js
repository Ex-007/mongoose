import User from '~/server/models/User'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) return { error: 'User ID is required' }

  try {
    const deletedUser = await User.findByIdAndDelete(id)

    if (!deletedUser) {
      return { error: 'User not found or already deleted' }
    }

    return {
      message: 'User deleted successfully',
      user: deletedUser
    }
  } catch (err) {
    return { error: 'Failed to delete user', details: err }
  }
})
