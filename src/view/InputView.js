import { MissionUtils } from '@woowacourse/mission-utils'
import { ErrorString, InputString, NUMBER_SIZE } from '../constants/index.js'

const InputView = {
  async readUserNumber() {
    const userNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_USER_NUMBER
    )
    this.validateUserNumber(userNumber)

    return await userNumber
  },

  async readRestartNumber() {
    const restartNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_RESTART_NUMBER
    )
    return await restartNumber
  },

  validateUserNumber(userNumber) {
    if (userNumber !== NUMBER_SIZE)
      throw new Error(ErrorString.ERROR_USER_NUMBER_LENGTH)
  },
}

export default InputView
