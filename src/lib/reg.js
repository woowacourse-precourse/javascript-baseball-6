import { INPUT_LENGTH, MAX_NUMBER, MIN_NUMBER } from "./constants.js";

export const INPUT_REGEX1 = new RegExp(`^(?!.*(.).*\\1)^[${MIN_NUMBER}-${MAX_NUMBER}]{${INPUT_LENGTH}}$`);
export const INPUT_REGEX2 = /^[12]$/