## 1. 기능 구현
### 1.0 우테코 API 이용
랜덤세자리 만들기
```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

### 1.1 정답 도달 (?) 
1. 사용자 인풋이랑 랜덤세자리랑 비교하기
2. 포함(includes)확인 -> 자리(indexOf)확인 -> ball, strike 개수 저장
3. ball, strike개수에 따라 메세지
4. 3스트라이크 선별 -> 추가 메세지
5. 정답 맞힐 때 까지 라운드 반복실행

### 1.2 사용자 상호작용
1. readline 모듈 추가
> ```javascript
> // readline 모듈 사용법
> const readline = require("readline");
> const rl = readline.createInterface({
>     input: process.stdin,
>     output: process.stdout,
> });
> rl.on("line", (line) => {
>     console.log("input: ", line);
>     rl.close();
> });
> rl.on('close', () => {
>         process.exit();
> })
> ```
2. input에 랜덤 세자리 대신 readline을 통해 입력받은 값 넣기
3. targetNumber를 랜덤 세자리로 설정

### 1.3 게임 종료 및 재시작 기능 추가
1. 게임이 시작되었음을 나타내는 변수 isStarted = true; 추가
2. round의 리턴값이 'clear'인 경우 를 isStarted = false 로 변경
3. isStarted = false 인 경우 입력값이 100 이하여도 오류 x 
4. 1 -> play() / 2 -> 종료..
 
## 2. 구현 후
### 2.1 작동 확인
```javascript
const app = new App();
app.play();
```

### 2.2 코드 컨벤션 확인
- `const SNAKE_CASE = 1;`
- `const INPUT = randomThree()`
- [에어비엔비 코드컨벤션 참고](https://github.com/airbnb/javascript/blob/master/README.md)

### 2.3 하면 안되는 것
- 외부 라이브러리(jQuery, Lodash 등)를 사용
- 프로그램 종료 시 process.exit()를 호출
- 파일, 패키지 이름을 수정하거나 이동


## 3. 제출 전
### 3.1 TEST 통과 확인
- npm test
- 모든 테스트가 성공

### 3.2 출력값 형식 확인

- 시작할 때: `숫자 야구 게임을 시작합니다.`
- default:
`1볼 1스트라이크`
- 하나도 없는 경우: `낫싱`
- 3개의 숫자를 모두 맞힐 경우: 
`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`
- 재시작 여부 묻기:
    `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
` 
- - 재시작 = 숫자 게임 시작 문구 출력 X