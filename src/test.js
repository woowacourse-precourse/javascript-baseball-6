let 답 = [1, 8, 9];
let 질문 = [6, 1, 9];

// 질문[0] === 답[0] > 낫싱
// 질문[0] === 답[1] > 낫싱
// 질문[0] === 답[2] > 낫싱

// 질문[1] === 답[0] > 볼
// 질문[1] === 답[1] > 낫싱
// 질문[1] === 답[2] > 낫싱

// 질문[2] === 답[0] > 낫싱
// 질문[2] === 답[1] > 낫싱
// 질문[2] === 답[2] > 1스트

// for (let 반복 = 0; 반복 < 9; 반복++) {
//   if (질문[0] === 답[0]) {
//     return 낫싱;
//   }
//   if (질문[0] === 답[1]) {
//     return 낫싱;
//   }
//   if (질문[0] === 답[2]) {
//     return 낫싱;
//   }
//   if (질문[1] === 답[0]) {
//     return 볼;
//   }
//   if (질문[1] === 답[1]) {
//     return 낫싱;
//   }
//   if (질문[1] === 답[2]) {
//     return 낫싱;
//   }
//   if (질문[2] === 답[0]) {
//     return 낫싱;
//   }
//   if (질문[2] === 답[1]) {
//     return 낫싱;
//   }
//   if (질문[2] === 답[2]) {
//     return 스트;
//   } else {
//     return alert('1~9의 숫자만 입력해주세요');
//   }
// }

// let RANDOM = [4, 8, 9];
// let uswer = [9, 8, 1];
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
let reulst = calcul([4, 8, 9], [9, 8, 1]);
console.log(reulst);

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
}

let p = checkInput(3);
console.log(p);
