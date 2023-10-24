### 구현할 기능 목록

0. async 사용하기
- 모듈 가져오기
- import { MissionUtils } from "@woowacourse/mission-utils";

1. 랜덤으로 컴퓨터가 숫자 값을 정하는 기능
- 별도 파일 만들기: Computer.js
- 3자리 숫자를 array 형태로 만들기
- Random.pickNumberInRange 사용
- 함수 export -> App.js에 import 하기

2. 사용자로부터 값을 입력 받는 기능
- App.js에서 함수로 만들기 (async makeUserInput())
- await, async 사용
- array 형태로 만들기 (Array.from(String(inputNumber),Number);)

3. 사용자의 입력값이 유효한지 확인하는 기능
- 별도 파일 만들기: Validation.js
- 하위 조건들 각각 만들기: 에러발생시 에러메시지 출력
3-1. 숫자 길이가 3
3-2. 숫자가 모두 숫자
3-3. 숫자가 1~9 사이 (꼭 필요한지 모르겠음!)
3-4. 숫자가 모두 다른 수
- class로 내보내기 
- 유효성 검사 마친 inputNumber값이 array 만드는 곳으로 넘어감
(try {Validation.gameInputValidation(inputNumber);} catch(e) {throw e} )

4. 컴퓨터가 정한 숫자와 사용자의 숫자를 비교하는 기능
- 별도 파일 만들기: Score.js
- answer=[a,b,c]와 input=[d,e,f] 비교
- for문 사용
(array의 위치와 값까지 같으면 'strike'에 1점 추가)
(array의 위치와 값이 같지 않지만, 값을 다른 위치에서 포함하고 있으면 'ball'에 1점 추가)
- App.js에서 다루고 있는 answer(컴퓨터랜덤값)와 inputValue(사용자 입력값) 가져오기

5. 사용자의 숫자에 대한 결과를 출력하는 기능
- 별도 파일 만들기:Score.js
- 함수만들기: 비교한 결과를 표현값(n볼 n스트라이크)로 출력하기 (console.log)
(Console.print는 왜 사용이 안될까?)
- App.js에서 받은 value값들을 해당 함수에 받아올 수 있도록 선언하기


6. 정답맞추때까지 동작 실행하기
- 반복문 안에 선언하여 프로그램이 한번에 종료되지 않게 하기
- while(조건){코드실행}
- 3스트라이크가 나올때까지 사용자 숫자입력은 반복되야함 
: 컴퓨터 랜덤값은 고정
: userWillRetry 반복할 동작들은 '사용자입력함수, 값비교함수, 결과출력함수'
: 결과가 3스트라이크 될때까지 반복 (if문 사용 )

7. 게임을 재시작하는 기능