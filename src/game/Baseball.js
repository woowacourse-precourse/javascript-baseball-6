import { Random } from "@woowacourse/mission-utils";

// 1~9까지 서로 다른 수로 이루어진 세자릿수 생성
export const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
};

// export const outputBallStrikeText = (ball, strike) => {
//   let inform = [];

//   if (ball !== 0) {
//     inform.push(`${ball}볼`);
//   }
//   if (strike !== 0) {
//     inform.push(`${strike}스트라이크`);
//   }

//   let informText = '낫싱';
//   if (inform.length > 0) {
//     informText = inform.join("");
//   }

//   return informText;
// }