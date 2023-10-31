## [숫자야구] 구현 기능 목록

0. 게임 시작 알림
1. 컴퓨터: 1~9 중 서로 다른 세자리 수 입력
2. 유저: 1~9 중 서로 다른 세자리 수 입력
3. 컴퓨터와 유저의 수 비교
4. 힌트(볼/스트라이크/낫싱) 출력
5. 숫자를 맞출 때까지 위 2~4 과정 반복
6. 유저: 게임 재시작/종료 선택

<hr />

### 0. 게임 시작 알림

- @woowacourse/mission-utils의 Console API를 사용

```
Console.print
```

- "숫자 야구 게임을 시작합니다." 출력

### 1. 컴퓨터의 세자리 수 입력

- @woowacourse/mission-utils의 Random API를 사용

```
Random.pickNumberInRange()
```

- 1~9 사이 서로 다른 임의의 세자리 수 저장

### 2. 유저의 세자리 수 입력

- @woowacourse/mission-utils의 Console API를 사용

```
Console.print
Console.readLineAsync
```

- 1~9 사이 서로 다른 세자리 수 입력
- "숫자를 입력해주세요 :" 출력
- 잘못된 값을 입력한 경우, IllegalArgumentException을 발생시킨 후 어플리케이션 종료

```
[예외1] 입력한 숫자가 3개가 아닌 경우
[예외2] 중복된 숫자를 입력한 경우
[예외3] 숫자가 아닌 문자를 입력한 경우
```

### 3. 컴퓨터와 유저의 입력값 비교

- 볼: 다른 자리에 같은 숫자가 있는 경우
- 스트라이크: 같은 자리에 같은 숫자가 있는 경우
- 낫싱: 볼이나 스트라이크가 하나도 없는 경우

### 4. 힌트 출력

- @woowacourse/mission-utils의 Console API를 사용

```
Console.print
```

- 3에서 구한 값을 바탕으로 힌트 출력
- 볼과 스트라이크가 모두 존재하면 볼의 개수 먼저 출력

### 5. 2번~4번 과정 반복

- @woowacourse/mission-utils의 Console API를 사용

```
Console.print
```

- 3스트라이크이면 아래 내용을 출력

```
3개의 숫자를 모두 맞히셨습니다! 게임 종료
```

### 6. 유저가 게임 재시작/종료 선택

- @woowacourse/mission-utils의 Console API를 사용

```
Console.print
Console.readLineAsync

게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
```

- 재시작: 1 / 종료: 2
- 잘못된 값을 입력한 경우, 에러 발생

```
[예외] 1과 2가 아닌 다른 수를 입력한 경우
```
