## 1. 기능 구현
### 1.0 우테코 API 이용 ✅
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

### 1.1 정답 도달 (?) ✅
1. 사용자 인풋이랑 랜덤세자리랑 비교하기
2. 포함(includes)확인 -> 자리(indexOf)확인 -> ball, strike 개수 저장
3. ball, strike개수에 따라 메세지
4. 3스트라이크 선별 -> 추가 메세지
5. 정답 맞힐 때 까지 라운드 반복실행

### 1.2 사용자 상호작용 ✅
1. readline 모듈 추가
> ```javascript
> // readline 모듈 사용법
> import * as readline from 'node:readline/promises';
> import { stdin as input, stdout as output } from 'node:process';
> const rl = readline.createInterface({ input, output });
> const answer = await rl.question('What do you think of Node.js? ');
> console.log(`Thank you for your valuable feedback: ${answer}`);
> rl.close();
> ```
2. input에 랜덤 세자리 대신 readline을 통해 입력받은 값 넣기
3. targetNumber를 랜덤 세자리로 설정

### 1.3 게임 종료 및 재시작 기능 추가 ✅
1. round의 리턴값이 'clear'인 경우 종료할지 시작할지를 물음
2. 입력값에 따라 다음 실행
3. 1 -> play() / 2 -> 종료..
4. (1024) 오류수정 : trial 재귀함수에서 result가 'fail'일 때 return을 해주지 않아 답을 틀리면 undefined가 return 되는 오류가 있었음!
: 커밋넘버 : #ㅇ
 
## 2. 구현 후 
### 2.1 작동 확인 ✅
```javascript
const app = new App();
app.play();
```

### 2.2 코드 컨벤션 확인 - 진행 중 ❌
- `const SNAKE_CASE = 1;`
- `const INPUT = createRandomThree()`
- [에어비엔비 코드컨벤션 참고](https://github.com/airbnb/javascript/blob/master/README.md)
#### 2.2.1 변수
- 리터럴 문법 사용 (ex. const array = []; (o) const array = new Array(); (x))
- 문법은 동사형으로
#### 2.2.2 객체
- 동적으로 객체의 키를 만들고 싶다면 객체를 생성하면서 넣어주기 (밖으로 빼지 않고)
```javascript
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```
- 객체 키랑 밸류랑 같으면 하나만 쓰면 됨(?)
- 하나만 쓸거면 위에 묶어놓기
- no-prototype-builtins (ex.Object.hasOwn(object,key); (o) // Object.hasOwnProperty(key); Object.prototype.hasOwnProperty.call; const has = Object.prototype.hasOwnproperty; has.call(object,key); (x))
- Object.assign({빈객체}, original, {추가할 객체}); (x) // const copy = { ...original, 추가할키:값}
#### 2.2.3 배열
- 배열을 복사할 때는 전개구문을 사용
- 노드리스트 같은 객체를 순회가능한 객체로 만들 때는 전개구문을 사용



### 2.3 하면 안되는 것  ✅
- 외부 라이브러리(jQuery, Lodash 등)를 사용
- 프로그램 종료 시 process.exit()를 호출
- 파일, 패키지 이름을 수정하거나 이동


## 3. 제출 전
### 3.1 TEST 통과 확인 ✅
- npm test
- 모든 테스트가 성공

### 3.2 출력값 형식 확인 ✅

- 시작할 때: `숫자 야구 게임을 시작합니다.`✅
- default:
`1볼 1스트라이크`✅
- 하나도 없는 경우: `낫싱`✅
- 3개의 숫자를 모두 맞힐 경우: 
`3스트라이크`✅
`3개의 숫자를 모두 맞히셨습니다! 게임 종료`✅
- 재시작 여부 묻기:
    `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.` ✅
- - 재시작 = 숫자 게임 시작 문구 출력 X ✅