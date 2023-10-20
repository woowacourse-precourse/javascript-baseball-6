import { INPUT_REGEX } from '../constants.js';

export default function validate(input) {
  return INPUT_REGEX.test(input);
}
