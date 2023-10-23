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
    const userNumberArray = userNumber.split('')

    if (userNumber.length !== NUMBER_SIZE)
      throw new Error(ErrorString.ERROR_USER_NUMBER_LENGTH)
    if (userNumber.replace(/[1-9]/g, '').length > 0)
      throw new Error(ErrorString.ERROR_USER_NOT_NUMBER)
    if (userNumber.length !== new Set(userNumberArray).size)
      throw new Error(ErrorString.ERROR_USER_DUPLICATED_NUMBER)
  },
}

export default InputView
