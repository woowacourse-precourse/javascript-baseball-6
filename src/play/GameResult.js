// 컴퓨터와 플레이어 수 비교
const computerNumber = "952";
const playerNumber = "512";

const arrNumber = (arr) => {
  return arr.split('').map(Number); // 배열로 바꿈
} 

const computerArray = arrNumber(computerNumber);
const playerArray = arrNumber(playerNumber);

// 스트라이크 횟수 카운트
const countStrike = () => {
  let strike = 0;

  for (let i = 0; i < 3; i++) {
      if (computerArray[i] === playerArray[i]) {
        strike++; // 조건이 만족될 때마다 strike 증가
      }
  }

  Console.print(`${strike} 스트라이크`);
}
  