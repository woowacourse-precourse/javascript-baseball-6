// 컴퓨터가 랜덤하게 3개의 숫자를 선택하는 함수
function generateRandomNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 가능한 숫자들
  let result = []; // 선택된 숫자들
  for (let i = 0; i < 3; i++) {
    // 3번 반복
    let index = Math.floor(Math.random() * numbers.length); // 랜덤한 인덱스
    result.push(numbers[index]); // 결과에 추가
    numbers.splice(index, 1); // 가능한 숫자에서 제거
  }
  return result;
}

// 사용자가 입력한 숫자를 검증하는 함수
function validateInput(input) {
  if (input.length !== 3) {
    // 길이가 3이 아니면
    throw new Error("세 자리 숫자를 입력해주세요.");
  }
  if (isNaN(input)) {
    // 숫자가 아니면
    throw new Error("숫자만 입력해주세요.");
  }
  if (new Set(input).size !== 3) {
    // 중복된 숫자가 있으면
    throw new Error("서로 다른 숫자를 입력해주세요.");
  }
}

// 사용자가 입력한 숫자와 컴퓨터가 선택한 숫자를 비교하는 함수
function compareNumbers(user, computer) {
  let strike = 0; // 스트라이크 개수
  let ball = 0; // 볼 개수

  for (let i = 0; i < user.length; i++) {
    // 각 자리수에 대해
    if (user[i] === computer[i]) {
      // 같은 수가 같은 자리에 있으면
      strike++; // 스트라이크 증가
    } else if (computer.includes(user[i])) {
      // 같은 수가 다른 자리에 있으면
      ball++; // 볼 증가
    }
  }

  return { strike, ball }; // 결과 반환
}

// 게임을 시작하는 함수
function startGame() {
  console.log("숫자 야구 게임을 시작합니다."); // 게임 시작 문구 출력

  let computer = generateRandomNumbers(); // 컴퓨터가 숫자 선택

  while (true) {
    // 무한 반복
    let user = prompt("숫자를 입력해주세요 : "); // 사용자에게 숫자 입력 받기

    try {
      validateInput(user); // 입력 검증하기

      let { strike, ball } = compareNumbers(user, computer); // 입력과 컴퓨터의 숫자 비교하기

      if (strike === 3) {
        // 스트라이크가 3개면
        console.log("3스트라이크"); // 결과 출력하기
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료"); // 게임 종료 문구 출력하기
        break; // 반복문 탈출하기
      } else if (strike === 0 && ball === 0) {
        // 스트라이크와 볼이 모두 없으면
        console.log("낫싱"); // 결과 출력하기
      } else {
        // 그 외의 경우
        console.log(`${ball}볼 ${strike}스트라이크`); // 결과 출력하기
      }
    } catch (error) {
      // 예외가 발생하면
      console.error(error.message); // 에러 메시지 출력하기
      break; // 반복문 탈출하기
    }
  }

  let restart = prompt("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."); // 재시작/종료 선택 받기

  if (restart === "1") {
    // 재시작을 선택하면
    startGame(); // 게임을 다시 시작하기
  } else if (restart === "2") {
    // 종료를 선택하면
    console.log("게임을 종료합니다."); // 게임 종료 문구 출력하기
    return; // 함수 종료하기
  } else {
    // 잘못된 값을 입력하면
    throw new Error("1 또는 2를 입력해주세요."); // 에러 발생시키기
  }
}

startGame(); // 게임 시작하기
