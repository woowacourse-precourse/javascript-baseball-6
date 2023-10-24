import { Random, Console } from "@woowacourse/mission-utils";

// 게임 내에서의 컴퓨터(상대방) 역할을 하는 클래스
class Computer {
  /**
   * 유저가 맞출 답 생성
   * @returns {number[]} 서로 다른 3자리의 랜덤 숫자 배열
   */
  createAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  /**
   * 유저의 입력값에 대한 스트라이크,볼,낫싱을 판단
   * @param {number[]} answer createAnswer에서 만들어진 숫자 배열
   * @param {string} input 유저가 입력한 값
   * @returns {string} 유저가 입력한 값에 대한 힌트 메시지
   */
  getHint(answer, input) {
    // input을 number[] 형태로 변환
    const splitInput = input.split("").map((item) => parseInt(item));

    // S = 스트라이크, B = 볼, N = 낫싱
    const sbnSet = { S: 0, B: 0, N: 0 };

    // sbnSet 값 카운팅 로직
    for (let i = 0; i < answer.length; i++){
      // 숫자가 포함되어있을때(스트라이크, 볼)
      if (answer.includes(splitInput[i])) {
        answer[i] === splitInput[i] ? sbnSet.S++ : sbnSet.B++
      } else {
        // 숫자가 포함되지 않았을때
        sbnSet.N++;
      }
    }
    
    let hintStr = "";
    if (sbnSet.N === 3) {
      hintStr = "낫싱";
    } else {
      if (sbnSet.S === 0) {
        hintStr = `${sbnSet.B}볼`;
      } else if (sbnSet.B === 0) {
        hintStr = `${sbnSet.S}스트라이크`;
      } else {
        hintStr = `${sbnSet.B}볼 ${sbnSet.S}스트라이크`;
      }
    }

    // 힌트 문자열 출력
    Console.print(hintStr);
    if (sbnSet.S === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    
    return hintStr;
  }
}

export default Computer;