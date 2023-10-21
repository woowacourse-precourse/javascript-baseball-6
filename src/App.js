import { MissionUtils } from "@woowacourse/mission-utils";

function generateComputer(computer) {
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9); // 함수 이름이 number를 pick하는 것이므로, number형으로 준다고 생각하는게 맞겠지.
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

async function inputTreating() {
  //# 인풋 받기
  const rawBaseballNum = await MissionUtils.Console.readLineAsync();

  const parsedBaseballNum = [];
  //## valid확인
  //###   문자열 길이
  if (rawBaseballNum.length != 3) {
    throw new Error("[ERROR]");
  }

  //### 각 자리 값이 1~9외의 다른 것들이 들어갔는지.  (문자, 0 등)
  for (let i = 0; i < 3; i++) {
    const parsed = parseInt(rawBaseballNum[i]);
    if (parsed === 0 || isNaN(parsed)) {
      throw new Error("[ERROR]");
    }
    parsedBaseballNum.push(parseInt(parsed));
  }

  //## valid 인풋 값.
  return parsedBaseballNum;
}

function matching(computer, baseballNum) {
  //# 비교하기
  let strikes = 0;
  let balls = 0;
  //## 숫자 포함 여부부터.
  for (let i = 0; i < 3; i++) {
    //#####// in을 사용하니까 제대로 안되네..  => in은 속성명이 존재한다면 true인 것. 기본은 index를 속성명으로 할 듯?
    //###// map이나 forEach으로 해야 할 듯.
    computer.forEach((computerNum, index) => {
      if (computerNum === baseballNum[i]) {
        if (index === i) {
          strikes += 1;
        } else {
          balls += 1;
        }
      }
    });
  }

  // ## 코멘트 정하기
  const ballComment = balls !== 0 ? `${balls}볼` : "";
  const strikesComment = strikes !== 0 ? `${strikes}스트라이크` : "";
  let commentFinal = "";
  if (balls === 0 && strikes === 0) {
    commentFinal = "낫싱";
  } else {
    commentFinal =
      balls === 0 ? strikesComment : `${ballComment} ${strikesComment}`;
  }

  //## 출력하기
  MissionUtils.Console.print(commentFinal);

  if (strikes === 3) {
    return true;
  }
  return false;
}

class App {
  async play() {
    ///
    // while로 반복해야 할지도>
    try {
      let start = 1;
      while (start === 1) {
        //# 컴퓨터 값 생성.
        const computer = [];
        generateComputer(computer);

        // 컴퓨터 테스트
        console.log("컴포터ㅓ", computer);

        let correct = false;
        //->3개의 숫자를 모두 맞히면 게임이 종료된다. -> 그 때까지 반복...
        while (!correct) {
          const baseballNum = await inputTreating(); // array
          // 인풋 테스트
          console.log("INPUT", baseballNum);

          correct = matching(computer, baseballNum);
        }
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.print(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        start = await MissionUtils.Console.readLineAsync();
        if (start !== 1 && start !== 2) {
          throw new Error("[ERROR]");
        }
      }
    } catch (e) {
      throw e;
    }
  }
}

export default App;
