import { MissionUtils } from '@woowacourse/mission-utils';

const getCom = function generateComputer(computer) {
  while (computer.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9); // 함수 이름이 number를 pick하는 것이므로, number형으로 준다고 생각하는게 맞겠지.
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
};

const getBbNum = async function inputTreating() {
  //# 인풋 받기
  // const rl = readline.createInterface({ input, output });
  // const inputNum = await rl.question('');

  let rawBaseballNum = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );

  //## valid확인
  //###   문자열 길이
  if (rawBaseballNum.length != 3) {
    throw new Error('[ERROR]');
  }

  //### 각 자리 값이 1~9외의 다른 것들이 들어갔는지.  (문자, 0 등)

  let parsedBaseballNum = rawBaseballNum.split('').map((raw) => {
    let parsed = Number(raw);
    if (parsed === 0 || Number.isNaN(parsed)) {
      throw new Error('[ERROR]');
    }
    return parsed;
  });

  //## valid 인풋 값.
  return parsedBaseballNum;
};

const match = function matchingComputerNumWithBaseballNum(
  computer,
  baseballNum
) {
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
  let ballComment = balls !== 0 ? `${balls}볼` : '';
  let strikesComment = strikes !== 0 ? `${strikes}스트라이크` : '';
  let commentFinal = '';
  if (balls === 0 && strikes === 0) {
    commentFinal = '낫싱';
  } else if (balls !== 0 && strikes !== 0) {
    commentFinal = `${ballComment} ${strikesComment}`;
  } else {
    commentFinal = `${ballComment}${strikesComment}`;
  }

  //## 출력하기
  MissionUtils.Console.print(commentFinal);

  if (strikes === 3) {
    return true;
  }
  return false;
};

class App {
  async play() {
    try {
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
      let start = 1;
      while (start === 1) {
        // 컴퓨터 값 생성.
        let computer = [];

        getCom(computer);

        let correct = false;
        // 비교
        while (!correct) {
          let baseballNum = await getBbNum();
          correct = match(computer, baseballNum);
        }

        // 게임 종료 시.
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

        // 계속 및 종료
        start = Number(
          await MissionUtils.Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
          )
        );

        // 계속 및 종료의 에러 체크
        if (start !== 1 && start !== 2) {
          throw new Error('[ERROR]');
        }
      }
    } catch (e) {
      throw e;
    }
  }
}

export default App;
