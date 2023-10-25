# 미션 - 숫자 야구

## 🔍 구현 논리 구조 및 흐름

### 0. 게임 시작

- (요구) 프로그램 실행의 시작점은 App.js의 play 메서드

```javascript
const app = new App();
app.play();
```

- (요구) '숫자 야구 게임을 시작합니다.' 문구 출력

---

### 1. 컴퓨터가 가질 1~9 사이 서로 다른 세 자리 랜덤 숫자 생성 ✅

- (요구) `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현
- (요구) Random 값 추출은 `Random.pickNumberInRange()`를 활용

```javascript
pickNumberInRange(startInclusive, endInclusive);
Random.pickNumberInRange(1, 10); // 1
Random.pickNumberInRange(1, 10); // 10
Random.pickNumberInRange(1, 10); // 4
Random.pickNumberInRange(1, 10); // 5
```

- 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 `computerNumbersArray` 생성

---

### 2. 유저가 input 창에 입력 후 확인버튼 누르면 ✅

### 3. 유저가 입력한 서로 다른 세 자리 숫자 배열 `userNumbersArray` 생성 ✅

- (요구) 사용자의 값을 입력 받고 출력하기 위해서는 Console.readLineAsync, Console.print를 활용

```javascript
async function getUsername() {
  try {
    const username = await Console.readLineAsync("닉네임을 입력해주세요.");
  } catch (error) {
    // reject 되는 경우
  }
}
```

```javascript
Console.print("안녕하세요.");
```

[ input이 하나일 때 ]

- 입력받은 값 자체를 받고
- 입력받은 값의 숫자 하나하나씩을 `userNumbersArray`에 넣어준다

[ (6)추가구현에 의해 input이 여러 개일 때 ]

- userNumbersArray 배열 생성
- makeUserNumbersArray 함수 생성

---

### 4. userNumbersArray의 유효성 검사 ✅

- `userNumbersArray`.length === 3 이어야 함
- `userNumbersArray` 안의 값들은 모두 1~9 사이의 정수여야 함
- 중복되는 숫자가 없어야 함

- (요구) 사용자가 잘못된 값을 입력한 경우 throw문 사용해 예외를 발생시킨 후 애플리케이션 종료

---

### 5. computerNumbersArray와 userNumbersArray 비교 ✅

- for문으로 배열 전체 확인
- 같은 인덱스 [i]에 같은 숫자가 위치하면 strike++
- 위는 아닌데, computerNumbersArray가 userNumbersArray[i]를 포함하하고 있으면 ball++
- 결과가 strike가 3이면 '3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
- 결과가 strike도 0, ball도 0이면 '낫싱'
- 결과가 위 조건 둘다 아니면, `${strike}스트라이크 ${ball}볼`

---

### 6. (추가) 결과가 '3스트라이크'가 아닐 경우 ✅

- #container 안에 input, 확인button, 결과div를 묶은 try 클래스 또 하나 생성
- try 클래스 생성될 때마다 h3태그 안에 'n차 시도' 표현
- 생성되는 selector의 이름이 모두 같아서 같은 결과로 덮어 씌워지는게 문제
  - 각 selector에 index를 넣어주는 것으로 해결

---

### 7. 컴퓨터가 선택한 3개의 숫자를 모두 맞혀 게임 종료되면

### 8. (요구) '1' 누르면 게임 재시작

- gameRestart 함수 생성
- 페이지 새로고침 되는 방향으로 진행 window.location.reload();

### 9. (요구) '2' 누르면 게임 완전히 종료

- gameFinished 함수 생성
- body태그 안에 h1태그의 '⚾️ 숫자 야구 게임이 종료되었습니다 ⚾️'만 남김
