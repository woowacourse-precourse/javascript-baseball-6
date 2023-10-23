# 프로그램 구조

```
App.js(컨트롤러) <- Baseball.service.js(서비스)
```

# App.js

## play

- 게임 시작 시 `숫자 야구 게임을 시작합니다.` 출력합니다.

### returns

`Promise<void>`

# Baseball.service.js

## generateRandomNumbers

- 3개의 중복되지 않는 숫자를 선택하여 문자로 변환 후 반환합니다.

### returns

`string[]`

## refree

- 컴퓨터가 생성한 값과 사용자의 입력 값을 비교하여 결과를 반환합니다.

### Parameters

| Name               | type     | description        |
| ------------------ | -------- | ------------------ |
| computer           | string[] | 컴퓨터가 생성한 값 |
| baseballQueryInput | string   | 사용자가 입력한 값 |

### returns

`{ball: number, strike: number}`

## printResult

- 결과를 전달 받아 출력합니다.
- ex) 1볼 1스트라이크, 낫싱

### Parameters

| Name   | type   | description     |
| ------ | ------ | --------------- |
| ball   | number | 볼 개수         |
| strike | number | 스트라이크 개수 |

### returns

`undefined`

## baseballQuery

- `숫자를 입력해주세요 : `를 출력하고 3자리 숫자를 입력받습니다.
- 3스트라이크가 아닌 경우, 다시 3자리 숫자를 입력 받습니다.
- 3스트라이크인 경우, `3개의 숫자를 모두 맞히셨습니다! 게임 종료`를 출력합니다.

### returns

`Promise<void>`

## validateBaseballQueryInput(balls: string): undefined

- 입력 받은 문자열의 길이가 3자리인지 확인합니다.
- 입력 받은 문자열이 숫자로 이루어져 있는지 확인합니다.
- 입력 받은 문자열에 0이 포함되어 있는지 확인합니다.
- 입력 받은 문자열이 서로 다른 숫자인지 확인합니다.

### Parameters

| Name  | type   | description      |
| ----- | ------ | ---------------- |
| balls | string | 입력 받은 문자열 |

### Returns

`undefined`

## retry

- 게임이 종료된 경우 `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`를 출력하고 1 또는 2를 입력 받습니다.
- 1을 입력 받은 경우 true, 2를 입력 받은 경우 false를 반환합니다.

### Returns

`Promise<void>`

## validateRetryInput

- 입력 받은 문자열이 '1' 또는 '2' 인지 확인합니다.

### Parameters

| Name  | Type   | Description      |
| ----- | ------ | ---------------- |
| retry | string | 입력 받은 문자열 |

### Returns

`undefined`
