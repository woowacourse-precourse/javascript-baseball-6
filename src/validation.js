import { messages } from './message.js'

const isError = async (player) => {
  if (player.length !== 3 || !Number(player[0]) || !Number(player[1]) || !Number(player[2])) {
    throw new Error(messages.errorMessage)
  }
}

export default isError
