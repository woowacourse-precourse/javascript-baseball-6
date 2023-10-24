import { Random, Console } from "@woowacourse/mission-utils";
import getRandomAnswer from "./choiceAnswer.js";
import checkUserInput from "./checkUserInput.js";
async function startGame() {
  Console.print("숫자 야구 게임을 시작합니다.");

  let again = true;
  while (again) {
    game();
    //게임 지속 의향
    again = wantAgain();
  }
}

async function game() {
  //정답용 숫자 선택
  const CORRECT_ANSWER = choiceAnswer(); //array 형태
  let USER_INPUT = [];
  do {
    //사용자 숫자 입력받기
    USER_INPUT = await getUserInput();
    // USER_INPUT = getUserInput();
    // while (USER_INPUT != false) {
    //   USER_INPUT = getUserInput();
    // }
  } while (compareAnswer(CORRECT_ANSWER, USER_INPUT));
}
async function wantAgain() {
  const WANT = await Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  try {
    if (WANT == 1) return true;
    else if (WANT == 2) return false;
    else {
      throw new Error("[ERROR] 답변이 잘못된 형식입니다.");
    }
  } catch (error) {
    //reject
    Console.print(e);
  }
}

function compareAnswer(CORRECT_ANSWER, USER_INPUT) {
  //용어 선언
  let STRIKE = 0;
  let BALL = 0;
  let NOTHING = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //같은 수가 존재하지 않으면 -> 낫싱
      //같은 수 발견하면
      Console.print(CORRECT_ANSWER[i] + " " + USER_INPUT[j]);
      if (CORRECT_ANSWER[i] == USER_INPUT[j]) {
        if (i == j) {
          //자리도 같으면 -> 스트라이크
          STRIKE++;
        }
        //else
        BALL++;
      }
    }
  }

  printResult(BALL, STRIKE, NOTHING);
}

function printResult(BALL, STRIKE, NOTHING) {
  //낫싱
  if (STRIKE == 0 && BALL == 0) {
    Console.print("낫싱" + STRIKE + BALL);
  } else if (STRIKE == 0) {
    Console.print(BALL + "볼");
  } else if (BALL == 0) {
    Console.print(STRIKE + "스트라이크");
    if (STRIKE == 3) {
      return handleCorrectAnswer();
    }
  } else {
    Console.print(BALL + "볼 " + STRIKE + "스트라이크");
  }
  //정답을 못 맞췄다면 반복
  return false;
}

function handleCorrectAnswer() {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  return true;
}

function choiceAnswer() {
  //숫자 범위 내에서 지정된 개수만큼 겹치지 않는 숫자를 반환
  return Random.pickUniqueNumbersInRange(1, 9, 3);
}

async function getUserInput() {
  let is_valid = false;
  let user_input = [];

  while (is_valid == false) {
    try {
      user_input = Number(await Console.readLineAsync("숫자를 입력해주세요 :"));
      Console.print("유저의 숫자는?" + user_input);
      if (checkInput(user_input) == false)
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      else {
        is_valid = true;
      }
    } catch (e) {
      //reject
      Console.print(e);
      is_valid = false;
    }
  }
  return checkInput(user_input);
  //  return checkInput(USER_INPUT); //array
}

// function checkInput(USER_INPUT) {
//   Console.print("checkoutinput : " + USER_INPUT);
//   //숫자인지?
//   if (isNaN(USER_INPUT)) {
//     //숫자가 아닐 경우 true
//     return false;
//   }
//   //1~9 숫자인지
//   let array = [];
//   do {
//     //자릿수 추가
//     array.push(USER_INPUT / 10);
//     //3자리 이상인지 검사
//     if (array.length > 3) {
//       return false;
//     }
//     //나머지가 0 -> 자릿수가 0
//     if (USER_INPUT % 10) {
//       return false;
//     }
//     //서로 다른 숫자인지?
//     for (let i of array) {
//       if (i == USER_INPUT % 10) {
//         return false;
//       }
//     }
//   } while (USER_INPUT / 10);
//   //3자리 이하인지 검사
//   if (array.length != 3) {
//     return false;
//   }
//   //Question : array에 각 자리수가 담겨있는데 이걸 바로 return해서 사용할 수 있는지?
//   //위에서는 bool 형태인데 갑자기 배열 반환해도 되는건지....?
//   return array;
// }

class App {
  async play() {
    //1. 게임 실행 알리기
    Console.print("숫자 야구 게임을 시작합니다.");

    //2. 랜덤 숫자 (정답) 고르기
    const CORRECT_ANSWER = getRandomAnswer(); //array 형태

    //3. 정답을 맞출 때까지 게임 반복
    while (true) {
      const USER_INPUT = Number(
        await Console.readLineAsync("숫자를 입력해주세요 :")
      );
      checkUserInput(USER_INPUT);
    }

    startGame();
  }
}

export default App;
