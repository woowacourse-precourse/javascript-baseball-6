// 컴퓨터가 가지고있는 서로다른 1~9 숫자
const COMPUTER = [];
for (let n = 0; n < 9; n++) {
  COMPUTER.push(n + 1);
}

// 컴퓨터가 가지고있는 1~9 중 무작위로 3개 뽑기
const RANDOM = [];
for (let n = 0; n < 3; n++) {
  let index = Math.floor(Math.random() * (COMPUTER.length - n)); // 0~8까지의 랜덤한 index값 지정
  RANDOM.push(COMPUTER[index]); //0~8까지의 index값에 따라 COMPUTER의 배열중 하나를 RANDOM배열에 가져온다(push)
  COMPUTER.splice(index, 1); // 위의 index값에 따라 COMPUTER의 배열을 뺸다
}

//유저가 입력할 수 있는 칸
<html>
  <form id="from">
    <input type="text" id="input"></input>
    <button>입력</button>
  </form>
</html>;

const TRY = [];
function checkInput(input) {
  if (input.length !== 3) {
    //3자리 숫자가 아닐때
    return alert('3자리 숫자를 입력해 주세요');
  }
  if (new Set(input).size !== 3) {
    // 중복된 숫자가 있는가
    return alert('중복되지 않게 입력해 주세요');
  }
  return true;
} //검사
// form.addEventListener((event) => {
//   event.preventDefault(); // 기본동작 막기
//   input.value = '';
//   if (checkInput(value)); {
//     TRY.push(value)
//   } else {
//    throw '"ERROR" 앱을 종료합니다' //에러 throw문 사용해서 에러문구 출력 및 앱 종료
//   }
// });

//볼, 스트라이크 계산
function calcul(RANDOM, uswer) {
  let strike = 0;
  let ball = 0;
  let not = 0;
  for (let cycle = 0; cycle < 3; cycle++) {
    if (RANDOM[0] === uswer[0]) {
      strike += 1;
    } else if (RANDOM[0] === uswer[1]) {
      ball += 1;
    } else if (RANDOM[0] === uswer[2]) {
      ball += 1;
    } else {
      not += 1;
    }
    if (RANDOM[1] === uswer[0]) {
      ball += 1;
    } else if (RANDOM[1] === uswer[1]) {
      strike += 1;
    } else if (RANDOM[1] === uswer[2]) {
      ball += 1;
    } else {
      not += 1;
    }
    if (RANDOM[2] === uswer[0]) {
      ball += 1;
    } else if (RANDOM[2] === uswer[1]) {
      ball += 1;
    } else if (RANDOM[2] === uswer[2]) {
      strike += 1;
    } else {
      not += 1;
    }
  }
  return strike, ball, not;
}

// 출력
if (strike === 3) {
  alert('스트라이크! 게임 종료');
} else if (0 < ball) {
  alert(ball, '입니다');
} else {
  alert(not, '입니다');
}

// 실행 결과
