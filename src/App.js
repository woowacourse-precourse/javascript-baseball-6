import { MissionUtils } from '@woowacourse/mission-utils';

const getCom = function generateComputer(computer) {
  while (computer.length < 3) {
    // 함수 이름에 따라 Number만 선택됨.
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
};

const getBbNum = async function inputTreating() {
  // 인풋 받기

  let rawBaseballNum = await MissionUtils.Console.readLineAsync(
    '숫자를 입력해주세요 : '
  );

  // valid 확인 - 문자열 길이
  if (rawBaseballNum.length != 3) {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  // valid 확인 -  각 자리 값
  let parsedBaseballNum = rawBaseballNum.split('').map((raw) => {
    let parsed = Number(raw);
    if (parsed === 0 || Number.isNaN(parsed)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return parsed;
  });

  // valid한 인풋 값.
  return parsedBaseballNum;
};

const match = function matchingComputerNumWithBaseballNum(
  computer,
  baseballNum
) {
  // 비교하기
  let strikes = 0;
  let balls = 0;

  // 비교하기 - 숫자 포함 여부부터.
  baseballNum.forEach((bNum, index) => {
    if (computer.includes(bNum)) {
      if (bNum === computer[index]) {
        strikes += 1;
        return false;
      }
      balls += 1;
    }
  });

  // 비교하기 - 코멘트 정하기
  let ballComment = balls !== 0 ? `${balls}볼` : '';
  let strikesComment = strikes !== 0 ? `${strikes}스트라이크` : '';
  let beteween = balls !== 0 && strikes !== 0 ? ' ' : '';

  let commentFinal =
    balls === 0 && strikes === 0
      ? '낫싱'
      : `${ballComment}${beteween}${strikesComment}`;

  // 비교하기 = 출력하기
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
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }
      }
    } catch (e) {
      throw e;
    }
  }
}

export default App;
