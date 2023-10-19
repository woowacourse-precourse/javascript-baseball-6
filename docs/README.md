## 기능 구현을 위한 함수 설계

### 수 생성 함수

> 랜덤한 수를 일정 개수만큼 생성하여 반환하는 함수

```js
function 랜덤생성({length}) {
    ...
    return number
}
```

- `Random.pickNumberInRange` 활용
- `length` 길이 만큼의 숫자 리스트를 생성하여 반환한다.

### 입력 함수

> 사용자로부터 3개의 수를 입력 받는 기능

```js
function 입력() {
    ...
}
```

- `Console.readLineAsync` 활용
- 비정상적인 입력인지 판단하여 `throw`문을 사용해 예외 발생

### 출력 함수

> 볼, 스트라이크의 개수 또는 나싱을 출력하는 기능

```js
function 출력({ ball, strike }) {
    ...
}
```

- `Console.print` 활용
- `strike`, `ball` 개수를 입력 받음
- 개수에 따라 메시지 화면에 출력
- `strike`, `ball` 모두 0이라면 "나싱" 출력

### 스트라이크, 볼 개수 판단 함수

> 사용자 입력과 컴퓨터가 생상한 수를 비교하여 스트라이크, 볼의 개수를 계산하여 반환한다.

```js
function 판단({ inputList }) {
    ...
    return {
        strike,
        ball
    }
}
```

- 사용자가 입력한 3개의 수를 리스트 형태로 입력 받음
- `computer` 리스트에 입력 받은 수가 있는지 `include`로 판단
- 있다면 인덱스가 같은지 판단
- 인덱스가 같다면 `strike += 1`  
  인덱스가 다르다면 `ball += 1`
- `{strike, ball}` 반환
