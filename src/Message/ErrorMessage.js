/**
 * 유저에게 받은 숫자의 길이가 3이 아닌 경우
 */
export function LengthErrorMessage() {
  throw new Error("[ERROR] 입력 숫자의 길이가 잘못되었습니다.");
}

/**
 * 유저에게 받은 입력에 숫자가 아닌 것이 있는 경우
 */
export function FormErrorMessage() {
  throw new Error("[ERROR] 입력에 숫자가 아닌 것이 있습니다.");
}

/**
 * 유저에게 받은 숫자에 중복숫자가 있는 경우
 */
export function DuplicationErrorMessage() {
  throw new Error("[ERROR] 입력에 중복 숫자가 존재합니다.");
}
