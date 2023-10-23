# 숫자 야구 게임 기능 목록

## App

#### play

1. NumberBaseballGame 실행

## NumberBaseballGame

#### validateArguments

게임 시작 전에 전달된 인수의 유효성을 검사

#### play (LOGIC)

1. 게임 시작

- 출력 "숫자 야구 게임을 시작합니다."

2. 중복 없이 숫자 3개 랜덤 뽑기

- 1에서 9까지의 서로 다른 숫자 3개를 받음

3. ball, strike 초기화

4. 사용자 입력

- 숫자 3자리의 플레이어의 입력을 받음

5. 입력 검증

- 플레이어가 제대로된 입력을 했는지 확인
- 3자리가 아닐경우 에러처리

5. 결과 계산

- 컴퓨터의 숫자와 플레이어의 추측을 비교
- 같은 수가 같은 자리에 있으면 스트라이크를 증가
- 같은 수가 다른 자리에 있으면 볼을 증가

6. 결과 표시

- 스트라이크와 볼이 하나도 없는 경우, 낫싱 출력
- 스트라이크와 볼 둘 다 있는 경우, 둘 다 출력
- 볼만 있는 경우, 볼 출력
- 스트라이크만 있는 경우 스트라이크 출력

7. 승리 했는지 확인

- 스트라이크와 Count가 같은지 확인
- 같을 경우 승리 및 게임 재시작 / 종료로 이동

7. 게임 재시작 / 종료

- 출력 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
- 1인 경우, 2번으로, 2인 경우 종료, 나머지인 경우 에러처리

#### resetStrikeAndBall

볼과 스트라이크 카운트를 초기화

#### validateUserInput

사용자 입력을 검증, 오류 처리

#### calculateStrikeAndBall

플레이어 입력과 컴퓨터 숫자를 비교하여 스트라이크와 볼을 계산

#### displayGameResult

게임의 결과를 표시, 스트라이크, 볼, 낫싱을 출력

#### isGameWon

게임에서 승리 여부 확인

#### askPlayAgain

게임을 다시 시작할 것인지 여부 확인

## IOHandler

#### displayMessage

화면에 메세지를 출력

#### getUserInputNumber

사용자로부터 숫자 입력을 받음

#### validateUserInputIsNumber

사용자 입력이 숫자인지 확인

## Utils

#### getUniqueRandomNumbersInRange

범위 내에 서로 다른 무작위 숫자를 생성

#### isNumber

값이 숫자인지 확인

#### validateGetNumbersRange

범위의 유효성을 검사
