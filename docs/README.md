# funtion list

## AppClass

```javascript
isValidNumber(number: string): void
```

- 숫자 입력이 올바른지 확인합니다.
- `number`: 입력된 숫자를 나타내는 문자열.
- 예외를 throw하여 잘못된 입력 시 에러 메시지를 출력합니다.

```javascript
isSameNumber(number: string): void
```

- 중복된 숫자가 있는지 확인합니다.
- `number`: 입력된 숫자를 나타내는 문자열.
- 예외를 throw하여 중복된 숫자가 있을 경우 에러 메시지를 출력합니다.

```javascript
isValidRestart(input: string): void
```

- 게임 재시작 또는 종료 입력이 올바른지 확인합니다.
- `input`: 입력된 옵션을 나타내는 문자열.
- 예외를 throw하여 잘못된 입력 시 에러 메시지를 출력합니다.

```javascript
generateRandomNumber(): number
```

- 1에서 9 사이의 중복되지 않는 3자리 숫자를 생성합니다.
- 반환값: 생성된 3자리 숫자.

```javascript
printResult(ballCount: number, strikeCount: number): void
```

- 볼과 스트라이크 수에 따라 결과를 출력합니다.
- `ballCount`: 볼의 수를 나타내는 숫자.
- `strikeCount`: 스트라이크 수를 나타내는 숫자.

```javascript
IsGameWin(computer: number, number: string): boolean
```

- 사용자가 정답을 맞추었는지 확인하고 결과를 출력합니다.
- `computer`: 컴퓨터가 생성한 정답을 나타내는 3자리 숫자.
- `number`: 사용자가 입력한 숫자를 나타내는 문자열.
- 반환값: 사용자가 정답을 맞춘 경우 `true`, 아닌 경우 `false`.
