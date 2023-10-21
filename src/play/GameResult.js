// 컴퓨터와 플레이어 수 비교
const computerNumber = "952";
const playerNumber = "512";

const arrNumber = (arr) => {
  return arr.split('').map(Number); // 배열로 바꿈
} 

const computerArray = arrNumber(computerNumber);
const playerArray = arrNumber(playerNumber);

// 게임 결과 출력
const showResult = () => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
      if (computerArray[i] === playerArray[i]) {
        strike++;
      } else if (playerArray.includes(computerArray[i])) {
        ball++;
      }
  }

  const result = [];

  if (strike === 3) return Console.print("성공!");
  if (strike > 0) result.push(`${스트라이크} 스트라이크`);
  if (ball > 0) result.push(`${ball} 볼`);

  Console.print(result.length ? result.join(' ') : "낫싱");
}