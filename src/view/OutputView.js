import { MissionUtils } from '@woowacourse/mission-utils'
import { OutputString } from '../constants'

const OutputView = {
  printStartString() {
    MissionUtils.Console.print(OutputString.OUTPUT_GAME_START)
  },

  printResult
}

export default OutputView
