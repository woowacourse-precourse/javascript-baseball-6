import { OUTPUT_MASSAGE } from '../contants.js';

function scoreConversion({ strike, ball }) {
  if (strike === 3) {
    return OUTPUT_MASSAGE.CORRECT_ANSWER;
  }

  if (ball > 0 && strike > 0) {
    return `${ball}${OUTPUT_MASSAGE.BALL} ${strike}${OUTPUT_MASSAGE.STRIKE}`;
  }

  if (ball > 0 && strike === 0) {
    return `${ball}${OUTPUT_MASSAGE.BALL}`;
  }

  if (strike > 0 && ball === 0) {
    return `${strike}${OUTPUT_MASSAGE.STRIKE}`;
  }

  return OUTPUT_MASSAGE.NOTHING;
}

export default scoreConversion;
