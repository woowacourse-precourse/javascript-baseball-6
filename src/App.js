import { MissionUtils } from "@woowacourse/mission-utils";
import compareAnswer from "./compareAnswer.js";
import getRandomAnswer from "./getRandomAnswer.js";
import checkUserInput from "./checkUserInput.js";
// async function startGame() {
//   MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

//   let again = true;
//   while (again) {
//     game();
//     //게임 지속 의향
//     again = wantAgain();
//   }
// }

// async function game() {
//   //정답용 숫자 선택
//   const CORRECT_ANSWER = choiceAnswer(); //array 형태
//   let USER_INPUT = [];
//   do {
//     //사용자 숫자 입력받기
//     USER_INPUT = await getUserInput();
//     // USER_INPUT = getUserInput();
//     // while (USER_INPUT != false) {
//     //   USER_INPUT = getUserInput();
//     // }
//   } while (compareAnswer(CORRECT_ANSWER, USER_INPUT));
// }

// function handleCorrectAnswer() {
//   MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
//   return true;
// }

// function choiceAnswer() {
//   //숫자 범위 내에서 지정된 개수만큼 겹치지 않는 숫자를 반환
//   return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
// }

// async function getUserInput() {
//   let is_valid = false;
//   let user_input = [];

//   while (is_valid == false) {
//     try {
//       user_input = Number(
//         await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :")
//       );
//       MissionUtils.Console.print("유저의 숫자는?" + user_input);
//       if (checkInput(user_input) == false)
//         throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
//       else {
//         is_valid = true;
//       }
//     } catch (e) {
//       //reject
//       MissionUtils.Console.print(e);
//       is_valid = false;
//     }
//   }
//   return checkInput(user_input);
//   //  return checkInput(USER_INPUT); //array
// }

// function checkInput(USER_INPUT) {
//   MissionUtils.Console.print("checkoutinput : " + USER_INPUT);
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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    //2. 랜덤 숫자 (정답) 고르기
    const CORRECT_ARRAY = getRandomAnswer(); //array 형태

    //3. 정답을 맞출 때까지 게임 반복
    while (true) {
      const USER_INPUT_STRING = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 :"
      );
      if (USER_INPUT_STRING) {
        //Question : 왜 if로 예외처리를 하지 않으면 USER_INPUT 값에 undefined가 들어오나요?
        //await면 값이 들어올 때까지 기다려야하는 게 아닌가요?

        if (checkUserInput(USER_INPUT_STRING) != false) {
          //비교
          // MissionUtils.Console
          //   .print
          //   //CORRECT_ARRAY + "정상적인 입력값" + USER_INPUT_STRING
          //   ();
          const RESULT = compareAnswer(CORRECT_ARRAY, USER_INPUT_STRING);

          if (RESULT) {
            break;
          }
        }
      }
    }

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    if (
      (await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      )) === "1"
    )
      await this.play();

    // if (WANT != "2") {
    //   throw new Error("[ERROR] 답변이 잘못된 형식입니다.");
    // }

    // if (USER_INPUT) {
    //   MissionUtils.Console.print("USER_INPUT : " + USER_INPUT);
    //   break;
    // }
  }
}

export default App;

// async function wantAgain() {
//   const WANT = await MissionUtils.Console.readLineAsync(
//     "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
//   );
//   try {
//     if (WANT == 1) return true;
//     else if (WANT == 2) return false;
//     else {
//       throw new Error("[ERROR] 답변이 잘못된 형식입니다.");
//     }
//   } catch (error) {
//     //reject
//     MissionUtils.Console.print(e);
//   }
// }
