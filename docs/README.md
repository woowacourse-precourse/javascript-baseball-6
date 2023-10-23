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

## play(): async 함수 설계

async play()

---

getComputer(); // computer값 받아옴

---

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

→ play(); //재귀

if else user ===2

→ return 0; //함수 종료

---

### 할 일

- [ ] 인풋 예외 처리 생각해보기
- [o] 초기 구현 해보기
- [ ] 리드미 더 보기 좋게 바꿔보기
