// const GameData = require('./GameData.js');
// const {validationNumbers} = require('./Validation.js');
// const {gameStart} = require('./gameStart.cjs');

import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    
    async function gameStart() {
      // 랜덤 숫자 뽑기
      const randomNumbers = [];
      while (randomNumbers.length < 3) { // 배열 길이가 3이 될 때까지 반복
        const number = Random.pickNumberInRange(1, 9); // 랜덤 숫자 선택
        if (!randomNumbers.includes(number)) { // 배열에 값이 중복되지 않도록 저장
          randomNumbers.push(number);
        }
      }
      Console.print(randomNumbers);


      // 숫자 입력 반복
      while (1) {
        const number = await Console.readLineAsync('숫자를 입력해주세요 : '); // 사용자 입력값
        const user = number.split('').map(Number); // 사용자 입력값 유효성 검사 & 통과하면 user에 저장
        if (user.length !== 3 || number === null || new Set(user).size !== 3) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.'); // 예외 발생 및 종료
        }
        // Console.print(user);

        let strike = 0;
        let ball = 0;
        // 초기 설정된 랜덤값 순회하며 값 비교
        for (let i = 0; i < randomNumbers.length; i++) {
          // 사용자 입력값에 랜덤값이 있는지 확인
          const index = user.indexOf(randomNumbers[i]); 
          
          // 같은 숫자가 존재하는 경우
          if (index > -1) {
            if (index === i) {
              strike++; // 자리까지 동일한 경우 : strike
            } else { // 자리는 다른 경우 : ball
              ball++;
            }
          }
        }
        
        // 3스트라이크
        if (strike === 3) {
          Console.print('3스트라이크');
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
        if (strike === 0 && ball === 0) {
          Console.print('낫싱');
        } else if (ball > 0 && strike === 0) {
          Console.print(`${ball}볼`);
        } else if (strike > 0 && ball === 0) {
          Console.print(`${strike}스트라이크`);
        } else {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      }

      // 게임 재시작
      const replay = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      if (replay === '1') {
        gameStart();
      }
    };

    gameStart();
  }


  // async play() {
  //   Console.print('숫자 야구 게임을 시작합니다.');
  //   class GameData {
  //     constructor() {
  //       this.state = true;
  //       this.threeStrike = false;
  //       this.ball = 0;
  //       this.strike = 0;
  //     }
    
  //     getState() {
  //       return this.state;
  //     }
    
  //     getRandomNumbers() {
  //       return this.randomNumbers;
  //     }
    
  //     getBall() {
  //       return this.ball;
  //     }
    
  //     getStrike() {
  //       return this.strike;
  //     }
    
  //     // ball 값 업데이트
  //     setBall(ball) {
  //       this.ball = ball;
  //     }
  //     // strike 값 업데이트
  //     setStrike(strike) {
  //       this.strike = strike;
  //     }
    
  //     // 삼진 확인
  //     getThreeStrike() {
  //       return this.threeStrike;
  //     }
    
  //     // 삼진 업데이트
  //     setThreeStrike(threeStrike) {
  //       this.threeStrike = threeStrike;
  //     }
  //   }
  //   const gameData = new GameData();
  //   // const randomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3); // 3개의 숫자 선택
  //   // Console.print(randomNumbers);
    
  //   const randomNumbers = [];
  //   while (randomNumbers.length < 3) {
  //     const number = Random.pickNumberInRange(1, 9);
  //     if (!randomNumbers.includes(number)) {
  //       randomNumbers.push(number);
  //     }
  //   }


  //   // ball, strike 확인하는 함수
  //   function setAnalysis(gameData, userInputs, randomNumbers) {
  //     // userInput과 비교해서 randomNumbers와 다른 값을 찾음
  //     const noStrikeNumbers = userInputs.filter((userInput, i) => 
  //       randomNumbers[i] !== userInput
  //     );
  //     // strike가 아닌 값들 중 randomNumbers에 포함되어있는 값을 찾음 === ball 개수
  //     const ballNumbers = noStrikeNumbers.filter((noStrikeNumber) => 
  //       randomNumbers.includes(noStrikeNumber)
  //     );
  //     const strike = 3 - noStrikeNumbers.length;
  //     const ball = ballNumbers.length;

  //     // 값 업데이트
  //     gameData.setBall(ball);
  //     gameData.setStrike(strike);

  //     printResult(gameData)
  //   }

  //   // 결과 출력하는 함수
  //   function printResult(gameData) {
  //     const ball = gameData.getBall();
  //     const strike = gameData.getStrike();

  //     // 0볼 0스트라이크
  //     if (ball === 0 && strike === 0) {
  //       Console.print('낫싱');
  //       return
  //     } 
  //     if (ball === 0) { // 0볼 n스트라이크
  //       Console.print(`${strike}스트라이크`);
  //       if (strike === 3) {
  //         Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  //         gameData.setThreeStrike(true); // 삼진 = true
  //       }
  //       return
  //     }
  //     if (strike === 0) { // n볼 0스트라이크
  //       Console.print(`${ball}볼`);
  //       return
  //     }
  //     // n볼 n스트라이크
  //     Console.print(`${ball}볼 ${strike}스트라이크`);
  //   } 

  //   // 게임 끝난 뒤 재시작 / 종료
  //   async function continueOrEnd(gameData) {
  //     const inputNumber = await new Promise((resolve) => {
  //       Console.readLine(
  //         '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  //         (input) => {resolve(input)}
  //       );
  //     });
  //     if (inputNumber !== '1' && inputNumber !== '2') {
  //       throw new Error('잘못된 값을 입력했습니다!');
  //     } else if (inputNumber === '2') { // 종료
  //       return gameData.setState(false);
  //     } else if (inputNumber === '1') { // 재시작
  //       gameData.setThreeStrike(false); // 삼진 상태를 false로 바꿔줌
  //     }
  //   };

  //   // 입력값 유효성 검사
  //   function validationNumbers(inputNumbers) {
  //     const inputNumbersSet = new Set(inputNumbers);
  //     // Console.print(inputNumbersSet)
    
  //     return (
  //       // 문자열의 길이 확인
  //       inputNumbers.length === 3
  //       // 숫자인지 확인
  //       && inputNumbers.every((inputNumber) =>
  //         Number.isInteger(parseInt(inputNumber, 10)) 
  //       )
  //       // 중복값 확인
  //       && inputNumbers.length === inputNumbersSet.size
  //     )
  //   }


  //   // state가 true일 때 반복
  //   while (gameData.getState()) {
    
  //     // 사용자에게 값 받기
  //     const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
  //     const userInputs = number.split("").map((userInput) => parseInt(userInput, 10)); // [ 1, 2, 3 ]
  //     // Console.print(userInputs)
  //     // Console.print(number, '--', userInputs)
      
  //     if (!validationNumbers(userInputs)) {
  //       throw new Error('[ERROR] 잘못된 값을 입력했습니다.');
  //     };
  //     // // 프로미스 방식 -> 성공 : resolve, 실패 : reject
  //     // const userInputs = await new Promise((resolve) => {
  //     //   Console.readLine("숫자를 입력해주세요 : ", (input) => {   
  //     //     Console.print(input) 
  //     //     Console.print(input.split('').map((userInput) => parseInt(userInput, 10)))
  //     //     resolve(input.split('').map((userInput) => parseInt(userInput, 10)));
  //     //   });
  //     // });
  //     // // 잘못된 값을 입력했을 때 처리
  //     // // validationNumbers가 false일 때
  //     // if (!validationNumbers(userInputs)) {
  //     //   throw new Error('잘못된 값을 입력했습니다.');
  //     //   continue; // 잘못된 입력일 경우 반복을 계속함
  //     // }
  //     // // // 제대로 된 값을 입력했다면 숫자로 변환
  //     // // const userInputsNumber = userInputs.split('').map((userInput) => parseInt(userInput, 10));

  //     setAnalysis(gameData, userInputs, randomNumbers);
  //     // printResult(gameData);

  //     if (gameData.getThreeStrike()) {
  //       await continueOrEnd(gameData);
  //     }
  //   }

  // }
}

const app = new App();
app.play();

export default App;