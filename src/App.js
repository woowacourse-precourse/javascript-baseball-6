import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    function makeAnswer() {
      const computer = new Set();
      while(computer.size < 3) {
        computer.add(Random.pickNumberInRange(1, 9));
      }

      return [...computer];
    }

    function getInput() {
      let input = Console.readLineAsync("숫자를 입력해주세요 : ");
      let user;
      
      input.then((message) => {
        user = [...message];
        Console.print(user);
        if(chkUserInput(user)) {
          Console.print("조건 통과함");
          chkValue(user, computer);
        }
      })
    }

    function chkUserInput(userInput) {
      //파라미터로 들어오는 배열의 값을 체크할것.
      //true / false 반환할것

      if(userInput.length < 3 || userInput.length > 3) {
        Console.print("되겠냐?");
        return false;
      } else {
        userInput.forEach(element => {
          if(element < 1 || element > 10 || isNaN(element)) {
            Console.print("되겠냐고");
            return false;
          } 
        });
      }

      return true;
    }

    function chkValue(userInput, computer) {
      //chkUserInput의 값이 true라면 두 배열을 비교하여 결과를 출력할것.

    }

    makeAnswer();
    Console.print("숫자 야구 게임을 시작합니다.");
    getInput();
  }
}

const app = new App();
app.play();

export default App;
