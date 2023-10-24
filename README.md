# 숫자 야구 기능 명세서

- [x] 서로 다른 임의의 수 3개를 생성한다.
- [x] '숫자 야구 게임을 시작합니다'를 출력한다. << 분리된 부분
- [x] 사용자의 값을 입력 받고 입력 받은 숫자를 출력한다.
- [x] 플레이어에게 입력 받은 숫자의 답을 출력해준다. << 목표 수정
  - [x] 같은 수가 같은 자리에 있으면 '{n}스트라이크'를 출력한다.
  - [x] 같은 수가 다른 자리에 있으면 '{n}볼'을 출력한다.
  - [x] 같은 수가 전혀 없으면 '낫싱'을 출력한다.
- [x] 서로 다른 세 자리 수가 아닌 값을 입력받은 경우, 애플리케이션은 종료된다. (throw문을 사용해 예외 처리)
- [x] 컴퓨터가 생성한 3개의 숫자를 모두 맞히면 '3개의 숫자를 모두 맞히셨습니다! 게임 종료'를 출력한다. << 출력까지로 수정
- [x] '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요'를 출력하며 재개 및 종료한다. << 출력하며 액션까지 추가
  - [x] 1을 입력 받으면 숫자 야구 게임을 재개한다.
  - [x] 2를 입력 받으면 애플리케이션은 종료된다.
