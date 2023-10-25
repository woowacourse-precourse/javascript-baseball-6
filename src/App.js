import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {

    Console.print("숫자 야구 게임을 시작합니다.");
    let COMPUTER_NUMBER = "";
    let RESULT = "";

    //랜덤 숫자 생성
    function makeComputerNumber() {
      let random_number_array = [];

      while(random_number_array.length < 3) {
        const ran_num = Random.pickNumberInRange(1, 9);
        if (!random_number_array.includes(ran_num)) {
          random_number_array.push(ran_num);
        }
      }

      let random_number = random_number_array.join("");

      return random_number;
    }

    //컴퓨터 숫자 vs 유저 숫자 비교
    function compareNumber(COMPUTER_NUMBER, USER_NUMBER) {
      let strike = 0;
      let ball = 0;

      for(let i = 0; i < 3; i++) {
        if (USER_NUMBER[i] === COMPUTER_NUMBER[i]) {
          strike++;
        } 
        else {
          for(let j = 0; j < 3; j++) {
            if (USER_NUMBER[i] === COMPUTER_NUMBER[j]) {
              ball++;
            }
          }
        }
      }

      if (ball > 0 && strike == 0) {
        RESULT = `${ball}볼`;
      } else if (ball == 0 && strike > 0) {
        RESULT = `${strike}스트라이크`;
      } else if (ball > 0 && strike > 0) {
        RESULT = `${ball}볼 ${strike}스트라이크`;
      } else {
        RESULT = "낫싱";
      }

      return RESULT;
    }

    //컴퓨터 숫자 초기화
    COMPUTER_NUMBER = makeComputerNumber();

    

    async function getUserNumber() {
      let USER_NUMBER = await Console.readLineAsync("숫자를 입력해주세요 : ");
      await checkUserNumber(USER_NUMBER, COMPUTER_NUMBER);
    }

    async function checkUserNumber(USER_NUMBER, COMPUTER_NUMBER) {

      //유저 숫자 확인
      if (USER_NUMBER.length > 3) {
        throw new Error("[ERROR] 3자리 숫자를 입력하세요.");
      }
      for (let i = 0; i < 3; i++) {
        if (USER_NUMBER[i] === 0) {
          throw new Error("[ERROR] 0이 아닌 1에서 9 사이의 수를 입력하세요.");
        }
        for (let j = i + 1; j < 3; j++) {
          if (USER_NUMBER[i] === USER_NUMBER[j]) {
            throw new Error("[ERROR] 서로 다른 숫자 3개를 입력하세요.");
          }
        }
      }

      //유저 숫자 vs 컴퓨터 숫자
      let re = compareNumber(COMPUTER_NUMBER, USER_NUMBER);

      if (re === "3스트라이크") {
        Console.print(re);
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        await areYouRe();
      } else {
        Console.print(re);
        await getUserNumber();
      }

    }

    
    async function areYouRe() {
      let choose = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (choose === "1") {
        await getUserNumber();
      } else if (choose === "2") {
        return;
      } else if (choose !== "1" && choose !== "2") {
        throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
      }
    }
  }
  
}

export default App;