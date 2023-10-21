import { PLAY_INPUT_REGEX, OPTION_INPUT_REGEX } from '../constants.js';

export default function validate(input) {
  if ((input + '').length === 1) {
    return OPTION_INPUT_REGEX.test(input);
  } else {
    return playNumberValidate(input);
  }
}

const isDuplicate = (array) => {
  return array.some((item) => array.indexOf(item) !== array.lastIndexOf(item));
};

const playNumberValidate = (input) => {
  const inputArr = Array.from(input + '');
  if (isDuplicate(inputArr)) {
    return 0;
  } else {
    return PLAY_INPUT_REGEX.test(input);
  }
};
