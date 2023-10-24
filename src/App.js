import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let endPoint = false; //왜..?
    while (!endPoint) {
      // 게임 시작
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      //임의의 비밀 숫자 생성
      const secret_number = randomNumber();
      endPoint = await isThreeStrike(secret_number);

      console.log(secret_number, "랜덤값");
    }
  }
}
//함수: 임의의 비밀숫자 생성
function randomNumber() {
  let computer = [];
  while (computer.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumber)) {
      computer.push(randomNumber);
    }
  }
  return computer;
}
//함수: 유저의 input 수집
async function getUserInput() {
  let user_guess = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  //유저의 잘못된 input 에러 처리
  if (!isValidInput(user_guess)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  } else {
    let user_guess_arr = user_guess.split("").map((e) => Number(e));
    console.log(user_guess_arr, "유저");
    return user_guess_arr;
  }
}
//함수 : 유저의 잘못된 input 에러 처리
function isValidInput(input) {
  return input.length == 3 ? true : false;
}

export default App;
