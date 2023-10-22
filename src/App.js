import {MissionUtils} from "@woowacourse/mission-utils";
import * as CONSTANT from "./constants.js";
/*
기능 요구 사항
  기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

  같은 수가 같은 잘에 있으면 스트라이크, 
  다른 자리에 있으면 볼,
  같은 수가 전혀 없으면 낫싱,
  상대방-컴퓨터
  1~9까지 서로 다른 임의 숫자 3개 선택
  플레이어
  1~9까지 서로 다른 임의 숫자 3개 선택
  게임 결과 출력, 상대방 숫자 3개 모두 맞힐때 승리
 
  게임종료 후 다시 시작하거나 완전 종료 선택 가능 (1, 2로 선택)

  사용자가 잘못된 값을 입력시 예외 처리로 종료


 프로그래밍 요구 사항

 과제 진행 요국 사항
 */

class App {
  async play() {
    const getMessage = (ball = 0, strike = 0) => {
      return ball === 0 && strike === 0 ? "낫싱" : `${ball}볼 ${strike}스트라이크`;
    };

    //게임시작

    let isEnd = false;
    MissionUtils.Console.print(CONSTANT.GAME_START_MESSAGE);
    while (!isEnd) {
      const computerNumbersArray = [];
      while (computerNumbersArray.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computerNumbersArray.includes(number)) computerNumbersArray.push(number);
      }

      MissionUtils.Console.print(computerNumbersArray); //test용 출력
      let isWine = false;
      while (!isWine) {
        let userNumber;
        // 에러 체크

        userNumber = await MissionUtils.Console.readLineAsync(CONSTANT.QUESTION_MESSAGE);
        //TODO 타입체크, 길이체크, 중복 체크 , 함수로 빼주고 함수형으로

        if (userNumber === undefined || userNumber === null) throw Error(CONSTANT.ERROR_MESSAGE);
        if (userNumber.length !== 3) throw Error(CONSTANT.ERROR_MESSAGE);
        if ([...new Set(userNumber.split(""))].length !== 3) throw Error(CONSTANT.ERROR_MESSAGE);

        //숫자 비교
        let ball = 0;
        let strike = 0;
        const userNumberArray = [...userNumber.split("")];
        userNumberArray.forEach((number, index) => {
          const integerNumber = Number(number);
          if (integerNumber === computerNumbersArray[index]) strike++;
          else if (computerNumbersArray.includes(integerNumber)) ball++;
        });

        const message = getMessage(ball, strike);
        MissionUtils.Console.print(message);
        if (strike === 3) {
          isWine = true;
          MissionUtils.Console.print(CONSTANT.WIN_MESSAGE);
        }
      }
      // 게임종료 확인
      const endAnswer = await MissionUtils.Console.readLineAsync(CONSTANT.GAME_END_QUESTION_MESSAGE);
      //TODO endAnswer 타입 검사
      if (endAnswer === "2") isEnd = true;
    }
  }
}

export default App;
