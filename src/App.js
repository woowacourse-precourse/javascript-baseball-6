import { MissionUtils } from "@woowacourse/mission-utils";

const { Console, Random } = MissionUtils;

/**
 * 설명 : ERROR를 전송해 프로그램을 종료시키는 함수
 */
const isError = () =>{
  throw new Error("[ERROR] 숫자가 잘못된 형식입니다."); 
}

class App {
  // private
  #answer;
  #userInput;
  #finish;

  constructor() {
    this.#answer = [];
    this.#userInput = [];
    this.#finish = false;
  }

  // private 변수 #answer 값을 불러옴
  getAnswer() {
    return this.#answer;
  }

  // private 변수 #userInput 값을 불러옴
  getUserInput() {
    return this.#userInput;
  }

  /**
   * 설명 : 구조분해를 통해 불러온 Console의 print를 실행
   * :params message : 터미널에 출력하고 싶은 문장
   */
  print(message) {
    Console.print(message);
  }

    /**
   * 설명 : 구조분해를 통해 불러온 Console의 readLineAsync 실행
   * :params message : 터미널에 입력한 값을 문자열로 읽어옴
   * return : 입력받은 값
   * 기타 : 비동기로 작동하기에 이를 동기로 전환
   */
  async readLineAsync(message) {
    return await Console.readLineAsync(message);
  }

  /**
   * 설명 : 숫자야구 정답을 생성하는 메서드
   * 정답은 [1,3,4] 같이 배열로 저장
   */
  makeAnswer() {
    this.#answer = [];

    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  /**
   * 설명 : 인자로 받은 input의 숫자인가? 길이가 3인가? 음수인가?에 대한 유효성 검사
   * :params input : 검사 할 문자열
   * return : 각 검사 결과를 boolean으로 저장 후 객체로 반환
   */
  checkValidateInput(input) {
    const isInt = Number.isInteger(+input);
    const notLengthThree = input?.length !== 3;
    const isMinus = Math.sign(input) === -1;

    const returnValue = {
      isInt: isInt,
      notLengthThree: notLengthThree,
      isMinus: isMinus,
    };

    return returnValue;
  }


  /**
   * 설명 : readLineAsync() 메서드를 통해 입력받은 값을 checkValidateInput()를 통해 검사하고 통과하면 반환
   * return : 입력받은 값을 answer과 같이 [1,3,4] 형식의 배열로 반환
   */
  async readUserInput() {
    let input = await this.readLineAsync("숫자를 입력해주세요 : ");

    const { isInt, notLengthThree, isMinus } = this.checkValidateInput(input);
    if (!isInt || notLengthThree || isMinus) {
      isError();
    }

    input = input.split("").map(Number);

    return input;
  }

  /**
   * 설명 : userInput과 answer을 비교 후 결과를 반환
   * return : 비교 결과인 strike, ball을 반환
   */  
  checkResult() {
    let strike = 0;
    let ball = 0;

    const computer = this.#answer;
    const user = this.#userInput;

    for (let i = 0; i < computer.length; i++) {
      const index = user.indexOf(computer[i]);
      if(index > -1){
        if(index === i){
          strike+=1;
        } else {
          ball+=1;
        }
      }
    }

    return { strike, ball };
  }

  /** 
   * 설명 : strike, ball 인자로 받아 결과를 출력
   * :params strike : checkResult() 결과 반환된 strike 값
   * :params ball : checkResult() 결과 반환된 ball 값
  */
  async printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      this.print("낫싱");
    } else {
      let output = "";

      if (ball > 0) {
        output += `${ball}볼 `;
      }

      if (strike > 0) {
        output += `${strike}스트라이크`;
      }

      this.print(output);
    }
  }

  /** 
   * 설명 : 재시작 여부를 확인함
   * 기타 : 1, 2 이외의 값을 입력 받으면 다시 재시작 여부를 물어봄
  */
  async reStart() {
    const input = await this.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

    if (input === "1") {
      this.makeAnswer();
    } else if (input === "2") {
      this.print("게임종료");

      return true;
    } else {
      isError();
    }
  }

  /**
   * 설명 : 게임 시작
   */
  async start() {
    while (!this.#finish) {
      this.#userInput = await this.readUserInput();
      const { strike, ball } = this.checkResult();
      this.printResult(strike, ball);

      if (strike === 3) {
        this.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.#finish = await this.reStart();
      }
      
    }
  }

  /**
   * 설명 : 게임 초반 설정을 담당
   */
  async setting() {
    this.makeAnswer();
    await this.start();
  }

  /**
   * 설명 : 게임 시작 알림 및 게임 설정
   */
  async play() {
    this.print("숫자 야구 게임을 시작합니다.");
    await this.setting();
  }
}

export default App;
