class App {
  async play() {

    console.log("숫자 야구 게임을 시작합니다.");
    let COMPUTER_NUMBER = "";
    let USER_NUMBER = "";
    let RESULT = "";

    //랜덤 숫자 생성
    function makeComputerNumber() {
      const min = 1;
      const max = 9;
      let random_number_array = [];

      while(random_number_array.length < 3) {
        const ran_num = Math.floor(Math.random() * (max - min + 1)) + min;
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

      if ( strike === 3) {
        RESULT = "3스트라이크";
      } else if (ball > 0) {
        RESULT = `${ball}볼 `;
        
      } else if (strike > 0) {
        RESULT += `${strike}스트라이크`
      }
      else {
        return "낫싱";
      }

      return RESULT;
    }

    while (true) {
      COMPUTER_NUMBER = makeComputerNumber();

      USER_NUMBER = prompt("숫자를 입력해주세요.");

      //유저 숫자 확인
      if (USER_NUMBER.length > 3) {
        throw "[ERROR]";
      }
      for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 3; j++) {
          if (USER_NUMBER[i] === USER_NUMBER[j]) {
            throw "[ERROR]";
          }
        }
      }

      compareNumber(COMPUTER_NUMBER, USER_NUMBER);

      let re = "";
      if (compareNumber === "3스트라이크") {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        re = prompt("게임을 사료 시작하려면 1, 종료하려면 2를 입력하세요.")
        if (re === "1") {
          continue;
        } else if (re === "2") {
          break;
        }
      }
    }
  }
}

export default App;