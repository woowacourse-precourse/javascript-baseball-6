# 기능 목록

## 게임 시작

- `@woowacourse/mission-utils`의 `Console.print()`를 활용
- 게임 시작 문구 출력


## 컴퓨터 랜덤 숫자 생성

- `@woowacourse/mission-utils`의 `Random.pickNumberInRange()`를 활용
- 1~9의 3자리 컴퓨터 랜덤 숫자 생성


## 사용자 숫자 입력

- `@woowacourse/mission-utils`의 `Console.readLineAsync()`를 활용
- 숫자 야구 게임 시작 및 사용자 값 입력
- 입력 값이 숫자이며 3자리인지 확인
- 입력 값을 숫자 배열로 변경
- 컴퓨터의 숫자와 입력값을 비교


## 비교 결과 출력

- 같은 수와 같은 자리에 있으면 `스트라이크` 출력
- 다른 자리에 유효한 숫자가 있으면 `볼` 출력
- 같은 수가 전혀 없으면 `낫싱` 출력
- 모두 맞추면 `3스트라이크`를 출력하고 종료 및 재시작 멘트 출력


## 게임 재시작 및 종료

- `@woowacourse/mission-utils`의 `Console.readLineAsync()`를 활용
- `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`를 출력
- `1` 입력 시 새로운 컴퓨터 랜덤 숫자 생성
- `2` 입력 시 게임 종료
- `1`과`2`가 아닌 값을 입력시 `[ERROR] 숫자가 잘못된 형식입니다.` 출력
