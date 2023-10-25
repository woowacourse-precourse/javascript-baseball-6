import { Console, Random } from '@woowacourse/mission-utils';

// 사용자에게 메시지를 출력하는 함수
const printMessage = (message) => Console.print(message);

// 컴퓨터가 랜덤한 숫자를 생성하는 함수
const generateNumberInRange = (min, max) => Random.pickNumberInRange(min, max);

// 에러를 출력하는 함수 (throwError)
const throwError = (message, condition = true) => {
  if (condition) throw new Error(message);
};

// 입력값이 1부터 9까지의 숫자인지 판별하는 함수
const isNumeric = (userInputValue) => /^[1-9]+$/.test(userInputValue);

// 입력값이 중복인지 판별하는 함수
const isUniqueDigits = (userInputValue) => new Set(userInputValue.toString().split('')).size === 3;

// 문자열을 배열로 변환하는 함수
const convertStringToArray = (string) => string.split('');

export {
  printMessage, generateNumberInRange, throwError, isNumeric, isUniqueDigits, convertStringToArray,
};
