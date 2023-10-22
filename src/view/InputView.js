import { MissionUtils } from '@woowacourse/mission-utils'
import { InputString } from '../constants'

const InputView = {
  async readUserNumber() {
    const userNumber = await MissionUtils.Console.readLineAsync(
      InputString.INPUT_USER_NUMBER
    )
    return await userNumber
  },
}

export default InputView
