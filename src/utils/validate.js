import { INPUT_REGEX } from '../constants.js';

export default function validate(input) {
  const inputArr = Array.from(input + '');
  if (isDuplicate(inputArr)) {
    return 0;
  } else {
    return INPUT_REGEX.test(input);
  }
}

const isDuplicate = (array) => {
  return array.some((item) => array.indexOf(item) !== array.lastIndexOf(item));
};
