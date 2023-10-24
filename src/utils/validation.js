import {ERROR_MESSAGE} from "../constants/Message";

//유효성 검사
export const isValidNumber = (string) => {
  //아무것도 입력하지 않았을 때
  if (!string) throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER);
  //3자리를 입력하지 않았을 때
  if (string.length !== 3) throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER);

  //1-9사이의 숫자를 입력하지 않았을 때
  if (!/^[1-9]+$/.test(string)) throw new Error(ERROR_MESSAGE.NOT_VALID_NUMBER);

  //겹치는 숫자를 입력했을 때
  if (
    (string[0] === string[1]) |
    (string[1] === string[2]) |
    (string[2] === string[0])
  )
    throw new Error(ERROR_MESSAGE.NOT_VALID_CHOICE);
};
