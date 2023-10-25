import { Random, Console } from "@woowacourse/mission-utils";

function computerRandomValue() { //서로 다른 세 자리 난수 생성 및 문자열 저장
    const randomValueArr = [];
    while (randomValueArr.length < 3) {
        const num = Random.pickNumberInRange(1, 9);
        if (!randomValueArr.includes(num)) randomValueArr.push(num);
    }
    return randomValueArr;
}


async function InputExceptions() { //사용자 값 조건에 맞는지 확인
    const userValue = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (userValue.length !== 3) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    if (userValue.split("").some((value) => value < "0" || value > "9")) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    if (userValue.split("").some((value) => value.repeat(3) == userValue || userValue.includes(value.repeat(2)))) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    

    return userValue.split('').map(Number);
}; 


function checkValues(userValue, computerValue) { //사용자 값과 컴퓨터값 비교
    let ball = 0;
    let strike = 0;
    
    for (let i = 0; i < 3; i++) {
      if (userValue[i] === computerValue[i]) strike++;
      else if (computerValue.includes(userValue[i])) ball++;
    }

    return { ball, strike };
}

function printValues(ball, strike) {
    let result = [];
    if (ball === 0 && strike === 0) result.push('낫싱');
    if (ball !== 0) result.push(`${ball}볼`);
    if (strike !== 0) result.push(`${strike}스트라이크`);
    Console.print(result.join(' '));
}

class App {
    async play() {}
    async play() {
        Console.print("숫자 야구 게임을 시작합니다.");
        let playGame = true;

        while (playGame) {
            const computerValue = computerRandomValue();
            while (true) {
                const userValue = await InputExceptions();
                const { ball, strike } = checkValues(userValue, computerValue);
                printValues(ball, strike);
                if (strike === 3) {
                    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    playGame = await this.endMsg();
                    break;
                }
            }
        
        }
    }
  
    async endMsg() {
        const res = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if (res === "1") return true;
        else if (res === "2") return false;
        else throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        
    }


}

export default App;
