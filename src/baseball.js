setAnswer();

// 초기 숫자 생성
function setAnswer() {
  let answer = '';
  while (answer.length < 3) {
    const randomNum = Math.floor(Math.random() * 10 );
    if(!answer.includes(randomNum)) answer += randomNum;
  }
  let count = 0;
  console.log(`숫자 야구 게임(${answer})을 시작합니다.`);
  getValue(answer, count);
}

// 사용자에게 입력값 받기
function checkValue() {
    const prompt=require("prompt-sync")({sigint:true}); 
    // const alert=require("alert-sync")({sigint:true});

  let value = prompt(`숫자를 입력해주세요 : `);
//   if(value === null) {
//     alert(`입력을 취소하셨습니다.\n새로고침을 눌러 다시 시도해주세요.`);
//     return false;
//   } else if(value.match(/\D/)) {
//     alert(`3자리 수의 숫자만 가능합니다.\n다시 입력해주세요.`);
//     return checkValue();
//   } else if(value.length > 3) {
//     alert(`3자리의 숫자를 넘길 수 없습니다.\n다시 입력해주세요.`);
//     return checkValue();
//   }
   return value;
}

// 입력값과 답안 비교
function getValue(answer, count) {
  let value = checkValue();
  if(!value) return;
  count++;
  console.log(`${count}번째 시도입니다.`);

  let s = 0, b = 0;
  let str = '';
  value.split('').forEach((e, idx) => {
    if(answer.indexOf(e) === idx) s++;
    else if(answer.split('').includes(e)) b++;
  })

  if(s === 3) str = `${s}스트라이크`;
  else if(b === 3) str = `${b}볼`;
  else str = `${s}스트라이크${b}볼`;
  console.log(str);
  answer !== value ? getValue(answer, count) : console.log(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
 
//   const prompt=require("prompt-sync")({sigint:true});
//   const alert=require("alert-sync")({sigint:true});

//   let value2 = prompt(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`);
//   if (value2 === 1) {
//     return checkValue();
//   }
//   else if (value2 === 2) {
//     return checkValue();
//   }
//   else {
//     alert('1과 2만 가능합니다.');
//   }


}