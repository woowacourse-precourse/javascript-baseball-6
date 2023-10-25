import { Random } from '@woowacourse/mission-utils';
import readline from 'readline';

const ANSWER_NUMS = [0, 0, 0];
let StrikeCount;
let BallCount;

function setAnswer() {
  do {
    ANSWER_NUMS[0] = Random.pickNumberInRange(1, 9);
    ANSWER_NUMS[1] = Random.pickNumberInRange(0, 9);
    ANSWER_NUMS[2] = Random.pickNumberInRange(0, 9);
  } while (hasDuplicatedAndZeroNumber(ANSWER_NUMS));
}

const isValidNum = inputStr => {
  if (Number.isNaN(Number(inputStr))) {
    throw new Error('숫자를 잘못 입력하셨습니다. 게임을 종료합니다.');
  } else if (inputStr.length !== 3) {
    throw new Error('숫자를 잘못 입력하셨습니다. 게임을 종료합니다.');
  } else if (hasDuplicatedAndZeroNumber(inputStr)) {
    throw new Error('숫자를 잘못 입력하셨습니다. 게임을 종료합니다.');
  } else {
    return true;
  }
};

const hasDuplicatedAndZeroNumber = val =>
  hasZero(val) || val[0] === val[1] || val[1] === val[2] || val[0] === val[2];

const hasZero = val => val[0] == 0 || val[1] == 0 || val[2] == 0;

const term = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

term.on('line', line => {
  if (line === '1') return resetGame();
  if (line === '2') return closeGame();

  try {
    if (!isValidNum(line)) return printQuestion();

    for (let i = 0; i < ANSWER_NUMS.length; i++) {
      if (ANSWER_NUMS[i] === Number(line[i])) StrikeCount++;
      else if (
        line[i] == ANSWER_NUMS[(i + 1) % 3] ||
        line[i] == ANSWER_NUMS[(i + 2) % 3]
      )
        BallCount++;
    }

    if (StrikeCount === 0 && BallCount === 3) {
      console.log('낫싱');
    } else {
      console.log(`${BallCount}볼 ${StrikeCount}스트라이크`);
    } 
    BallCount = StrikeCount = 0;

    if (BallCount === 0 && StrikeCount === 3) 
      endGame();
    printQuestion();
  } catch (error) {
    console.error(error.message);
    closeGame(); 
  }
});

function printQuestion() {
  term.output.write('숫자를 입력해주세요 : ');
}

function endGame() {
  if (StrikeCount === 3) console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  closeGame();
}

function closeGame() {
  console.log('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  term.close();
}

function resetGame() {
  StrikeCount = 0;
  BallCount = 0;

  console.log('숫자 야구 게임을 시작합니다.');
  printQuestion();
  setAnswer();
}

resetGame();
