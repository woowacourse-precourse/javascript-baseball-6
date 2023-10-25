# 구현할 기능 목록

1. 컴퓨터는 1~9까지 랜덤으로 숫자 3개 출력.

   ```jsx
   const computer = [];
   while (computer.length < 3) {
     const number = MissionUtils.Random.pickNumberInRange(1, 9);
     if (!computer.includes(number)) {
       computer.push(number);
     }
   }
   // ex) computer = [ 2, 4, 8 ]
   ```

2. 사용자는 숫자 3개 입력 (input)
3. 컴퓨터는 사용자가 입력한 숫자에 대한 결과값 출력
4. 사용자가 숫자를 3개 다 맞추면 게임 종료
5. 종료 후에는 재시작/종료를 구분하는 1과 2 중 하나의 수 입력
6. 사용자가 숫자가 아닌 값을 입력하거나 4개 이상의 수를 입력하면 throw문을 사용해 예외 처리로 에러 문구 출력 후 앱 종료.

## 과정

```jsx
const com = [1, 2, 3];
const user = [4, 2, 1];
const strike = [];
const ball = [];
const nothing = [];
for (let i = 0; i < user.length; i++) {
  if (com[i] === user[i]) {
    strike.push(user[i]);
  } else if (com.indexOf(user[i] >= 0)) {
    ball.push(com.indexOf(user[i]));
  } else if (com.indexOf(user[i]) === -1) {
    nothing.push(com.indexOf(user[i]));
  }
}
console.log(strike); //[2]
console.log(ball); //[-1, 0]
console.log(nothing); //[]
```

⬇️ 수정

```jsx
const com = [1, 2, 3];
const user = [4, 2, 1];
const strike = []; //스트라이크
const ball = []; //볼
const nothing = []; //낫싱
for (let i = 0; i < user.length; i++) {
  if (com[i] === user[i]) {
    strike.push(user[i]);
  } else if (com.includes(user[i])) {
    ball.push(user[i]);
  } else {
    nothing.push(user[i]);
  }
}
console.log(strike); //[2] -> 1 스트라이크
console.log(ball); //[1] -> 1 볼
console.log(nothing); //[4] -> 숫자가 3개 들어와야 낫싱임
```

⬇️ 스트라이크와 볼을 count 하게끔 수정( com ⇒ computer)

```jsx
const computer = [1, 2, 3];
const user = [1, 2, 6]; //숫자를 바꿔서 테스트
let strike = 0;
let ball = 0;
let nothing = 0;
for (let i = 0; i < user.length; i++) {
  if (computer[i] === user[i]) {
    strike += 1;
  } else if (computer.includes(user[i])) {
    ball += 1;
  } else {
    nothing += 1;
  }
}
console.log(strike); //2 스트라이크
console.log(ball); //0 볼
console.log(nothing); //1 -> 낫싱일 경우엔 숫자가 3이어야 낫싱
```
