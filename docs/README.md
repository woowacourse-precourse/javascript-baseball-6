# README.md

## 구조 이해

함수 시작()
먼저, 컴퓨터값 받아오고
input은 하나,
처음에 자동 시작 → 일단 숫자 세자리 받음.

3 strike가 될 때까지 계속 돈다 → 계속 숫자 세자리

게임이 끝난 후, 1 / 2를 받아 재시작 / 종료 여부 결정

→ 반복문 마지막에 1 / 2를 받아서

- 1이면 재귀
- 2이면 종료 → _return 0?_

## gameStart(): async 함수 설계

## async gameStart()

## getComputer(); // computer값 받아옴

{ while strike !== 3 // 3strike가 되기 전까지 계속 돌림
input 3자리를 받고,

---

{ 한자리씩 for문 돌리기

1. user[i] === computer[j] //
   1. 자리 수 i, j 까지 똑같다면?
      → strike += 1 (strike)
   2. 자리수는 다른데 숫자만 똑같음
      → ball += 1 (ball)
      }

---

print(스트라이크, 볼 수 혹은 낫싱)
continue;
}

---

print(3스트라이크);
if user === 1
→ gameStart(); //재귀
if else user ===2
→ return 0; //함수 종료

---

## checkInput(): 인풋 예외처리

### 게임 중일 때

- 서로 다른 3자리 수만 입력해야함
  **예외**

1. 3자리가 아니다
2. 중복되는 숫자를 입력했다
3. 0이 있다.
   → 3자리 확인 → 0 확인 → 중복 확인

### 게임 끝난 후

- 1, 2 만 입력해야 함
  **예외**

1. 1 또는 2가 아니다

### 케이스 나누기

게임 중인가 아닌가? boolean으로
→ `playing` = true / false

1. 게임 중 (true)

```jsx
//Set으로 중복 제거 후 받은 배열크기랑 같은지 확인
let isDup = new Set(input).size !== input.length; //boolean, 중복이면 true
if (input.length !== 3 || input.includes(0) || isDup)
  // 하나라도 true 이면
  throw Error;
```

- 이 때 input은 number[]여야 함

2. 게임 끝 (false)

- input ===1 && ===2

### 할 일

- [o] 인풋 예외 처리 생각해보기
- [ ] 아웃풋 구조 정리
- [ ] 리드미 더 보기 좋게 바꿔보기
