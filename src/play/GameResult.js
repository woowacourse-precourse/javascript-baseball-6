// 컴퓨터와 플레이어 수 비교
const computerNumber = "952";
const playerNumber = "512";

const arrNumber = (arr) => {
  return arr.split('').map(Number); // 배열로 바꿈
} 

const computerNumberArray = arrNumber(computerNumber);
const playerNumberArray = arrNumber(playerNumber);