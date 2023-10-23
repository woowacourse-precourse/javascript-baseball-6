# 구현 사항

## 1. `play()`

### 1-1. 상태값

먼저, 게임 점수와 게임진행상태를 나타내는 변수를 설정해주자.

```js
let score = []; // (볼, 스트라이크)
let endGame = false;
```

### 1-2. 상대방 수 랜덤생성

상대방(컴퓨터)의 수는 랜덤으로 생성되어야한다.

그럼 `@woowacourse/mission-utils`에 있는 `Random.pickNumberInRange()`를 활용해보자.

### 1-3. Player의 입력값 받기

사용자의 값을 입력받고 출력받기 위해서 이번에도 `@woowacourse/mission-utils`에 있는 `readLineAsync`를 활용하여, 결과값을 출력해보자.

```js
const answer = await Console.readLineAsync("숫자를 입력해주세요. : ");
```

그럼, 초기 셋팅은 완료되었다.

### 2. 점수

### 2-1. 점수

야구 게임을 맞췄는지 여부를 확인하기 위해서는, 컴퓨터가 랜덤으로 생성해주는 번호와 Player가 입력한 값이 순서상관없이 일치해야한다.

```js
getScore(randomNumber, answer){
    ANSWER_NUM.forEach((num, idx) => {
    const COMPUTER_NUM = randomNumber.split("");
    const ANSWER_NUM = answer.split("");

    if (num === COMPUTER_NUM[idx]) {
        score[0]++;
    } else if (COMPUTER_NUM.includes(num)) {
        score[1]++;
    }
    return score;
    });
}
```

### 2-2. 케이스별 결과값
score을 얻었다면, 스트라이크와 볼 수에 따라 맞는 값을 `Console.print()`로 출력해주자.    
그리고 스트라이크인 경우, 게임종료를 추가로 출력하고 입력값에 따라 게임을 재시작할지 종료할지 확인해주는 `restart()` 메서드를 추가로 만들어주자.


그리고 `endGame=true` 로 게임 진행상태도 변경해주자.

 
## 3. 예외 테스트

마지막으로 입력값이 잘못되었을 때, 예외처리를 해보자.

### 3-1. 입력값이 정수가 아닌 경우

- `Number.isInteger()`

이 메서드를 통해 주어진 값이 정수인지 확인할 수 있다.  
소수점을 가진 경우를 false로 걸러낼 수 있다.

그리고 string 일 때를 고려하여, `!Number.isInteger(Number(answer))` 로 예외처리를 해주었다.

### 3-2. 입력값의 길이가 3자리가 아닌 경우

문제에 따르면, Player의 입력값은 3이어야한다.  
3이 아니면, `throw`으로 `error`를 보내주자.

```js
answer.length !== 3;
```

### 3-3. 입력값에 0이 포함될 경우

문제에 따르면, 0이 포함되면 안된다.  
`answer.includes(0)` 의 경우도 추가해주며 해당 문제를 마무리하였다.
