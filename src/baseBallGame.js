import createRandomNumber from "./createRandomNumber.js";
// 1. Random Number 출력
// 2. input 입력값과 랜덤숫자를 비교해서 자리수 확인

const checkValidation = (userInput) => {
  if (userInput.length !== 3) {
    throw new Error("[ERROR]");
  }
};

const baseBallGame = (userInput) => {
  const userInputArr = userInput.reduce(
    (acc, str) => acc.concat(str.split("").map((el) => Number(el))),
    []
  );
  console.log(userInputArr);
  const computerValue = createRandomNumber();
  const resultValue = [];

  computerValue.forEach((el) => {});
};

console.log(baseBallGame(["123", "456"]));
