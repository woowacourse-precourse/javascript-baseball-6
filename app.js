// 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 생성
const computerNumbersArray = [];
while (computerNumbersArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbersArray.includes(number)) {
        computerNumbersArray.push(number);
    }
}
console.log(computerNumbersArray);