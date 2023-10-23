import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    gameStart();
  }
}
export default App;



const gameStart = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  computerNum(); // 컴퓨터에서 임의의 수 3개 선택
};

const computerNum = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  userInputNum(computer); // 사용자로부터 3자리 수 입력받기

}

const userInputNum = async (computer) => {
  let userInput;
  try {
    userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  } catch (error) {
    // reject 되는 경우
  }
  checkNum(userInput, computer);  // 입력값 유효성 체크
}

const checkNum = (userInput, computer) => {
  let user = userInput.split("");
  if (user.length == 3) {
    user.forEach((e, index) => {
      user[index] = parseInt(e);
      if (isNaN(e)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    })
  }
  else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  compare(user, computer);  // 입력받은 값이 유효할 경우 숫자 비교
}

const compare = (user, computer) => {
  console.log("user, computer", user, computer);
  let ballCount = 0;
  let strikeCount = 0;
  let nothing = false;
  user.forEach((user, index) => {
    computer.forEach((computer) => {
      user === computer ? ballCount++ : null;
    })
    user === computer[index] ? strikeCount++ : null;
  })
  ballCount === 0 ? nothing=true : null;
  ballCount -= strikeCount; // 스트라이크카운트(같은수가 같은자리에)는 볼카운에서 제외

  console.log("ballCount", ballCount);
  console.log("strikeCount", strikeCount);
  console.log("nothing", nothing);
}




const app = new App();
app.play();

