function 랜덤숫자선택() {
  const computer = [];
  while (computer.length < 3) {
    const number = getRandomNumber(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function 플레이어인풋() {
  const user_input = prompt("숫자 3개를 입력하세요 (예: 123) :");

  if (!/^\d{3}$/.test(user_input)) {
    throw new Error("[ERROR] 잘못된 입력 형식입니다");
  }

  return user_input.split("").map(Number);
}

function 숫자비교(램덤숫자, 플레이어숫자, 게임상태) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (램덤숫자[i] === 플레이어숫자[i]) {
      strike++;
    } else if (램덤숫자.includes(플레이어숫자[i])) {
      ball++;
    }
  }
  if (strike === 0 && ball === 0) {
    return "낫싱";
  }

  const result = `${ball > 0 ? ball + "볼" : ""} ${
    strike > 0 ? strike + "스트라이크" : ""
  }`;

  // 게임 상태를 확인하여 게임 종료 여부 판단
  if (strike === 3) {
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    게임상태.gameOver = true;
  }

  return result;
}

function 재시작() {
  const user_restart = prompt(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  return user_restart === "1";
}

function 게임시작() {
  // 숫자야구 게임 시작
  console.log("숫자 야구 게임을 시작합니다.");

  while (true) {
    // 변수 선언
    const 게임상태 = { gameOver: false };
    // 컴퓨터의 램덤숫자 선택
    const random_number = 랜덤숫자선택();
    console.log(`랜덤으로 선택된 숫자 ${random_number}`);
    // 사용자 인풋 받아오기 및 에러 발생
    while (!게임상태.gameOver) {
      let user_input_arr;
      try {
        user_input_arr = 플레이어인풋();
        console.log("사용자가 입력한 숫자:", user_input_arr.join(""));
      } catch (error) {
        console.error(error.message);
      }
      // 플레이어 인풋과 램덤숫자 비교
      console.log(숫자비교(random_number, user_input_arr, 게임상태));
    }
    if (!재시작()) {
      return;
    }
  }
}
