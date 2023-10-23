import { MissionUtils } from '@woowacourse/mission-utils'
import { InputString } from '../constants/index.js'

const InputView = {
  async readUserNumber() {
    const userNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_USER_NUMBER
    )
    return await userNumber
  },

  async readRestartNumber() {
    const restartNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_RESTART_NUMBER
    )
    return await restartNumber
  },
}

export default InputView
