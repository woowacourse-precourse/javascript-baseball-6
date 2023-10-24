## 기능 구현 목록

0. API 가져오기
@woowacourse/mission-utils의 Random 및 Console API

1. 게임 시작 메시지 출력
Console.print함수 사용
숫자 야구 게임을 시작합니다.

2. 정답 생성 기능
generateRandomNumber함수를 통해 1-9까지의 숫자로 랜덤한 세 자리 숫자를 만들기
이 함수를 통해 생성된 숫자를 secretNumber에 할당하기

3. 숫자 입력 기능
Console.readLineAsync을 활용하여 숫자를 입력 받고, 이를 숫자로 변환하여 guess에 할당

4. 정답 비교 기능
guess와 secretNumber의 각 자리 값을 비교하여 스트라이크와 볼로 표시
