import { feedbackMessage, messages } from '../message.js'

import { Console } from '@woowacourse/mission-utils'

const print = (strike, ball, feedback) => {
  if (!ball && !strike) feedback = messages.nothing
  else feedback = feedbackMessage(ball, strike)
  Console.print(feedback)
  if (strike === 3) return false
  else return true
}

export default print
