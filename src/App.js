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
    console.log("userInput", userInput);
    checkNum(userInput, computer);  // 입력값 유효성 체크
}

const checkNum = (userInput, computer) => {
  let user = userInput.split("");
  if(user.length==3){
    for(let i = 0; i<3; i++){
      user[i] = parseInt(user[i]);
      if(isNaN(user[i])){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
      }
    }
  }
  else{
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  console.log("user", user);
  console.log("computer", computer);
  compare(user, computer);  // 입력받은 값이 유효할 경우 숫자 비교
}

const compare=(user, computer)=>{


}




const app = new App();
app.play();

