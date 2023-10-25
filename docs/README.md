# 야구 게임 기능 목록

1. 게임 시작 메세지 출력 `printMsgIs()`

   - 사용자에게 게임 시작 메세지 출력
   - `Console.readLineAsync()`을 활용한다.

2. 컴퓨터 숫자 생성 `makeStrikeZoneNumber()`

   - 컴퓨터는 서로 다른 3자리 숫자를 무작위로 생성한다.
   - `Random.pickNumberInRange()`를 활용한다.
   - `Random.pickNumberInRange()`은 범위 내에서 랜덤한 숫자를 반환.
   - 길이가 3인 배열 `strikeZoneNumber`을 만든다.

3. 입력값 유효성 검사 후 사용자 입력 배열 생성 `makePitchingNumber()`

   - 숫자 입력을 받고, 입력값 유효성 검사 후 pitchingNumber에 할당
   - 유효성 검사는 따로 메서드로 분리
   - 숫자 입력은 서로 다른 3자리의 수이어야 한다.
   - 유효성 검사를 통과하지 못한 경우 'ERROR' 메세지 출력 후 어플리케이션 종료
   - 검사를 통과하면 길이 3인 문자 배열 pitchingNumber 배열을 만든다.

4. 결과값 할당 `makeResult()`

   - strikeZoneNumber와 pitchingNumber를 비교
   - 결과값(strikes와 balls)을 가진 result 객체를 만든다.

5. 결과에 따른 함수 호출 `judge()`

   - result 객체를 읽고, 다음 메서드를 호출

6. `judge()` 결과가 삼진인 경우 `askRetry()`

   - 축하메세지 출력 `congratMessagePrint()`
   - 재시도 여부 확인 `askRetry()`
     - 입력값이 `1`인 경우(재시작)
       - 컴퓨터 숫자(strikeZoneNumber) 생성 `makeStrikeZoneNumber()`
       - 3번 부터 5번까지 재귀호출 `game()`
     - 입력값이 `1` 이 아닌 이외에 경우(2를 입력했을 때 포함)
       - 게임 종료 `return`

7. `judge()` 결과가 삼진이 아닌 경우 `resultMessagePrint()`

   - 결과 메세지 출력 `resultMessagePrint()`
   - 3번 부터 5번까지 재귀호출 `game()`
