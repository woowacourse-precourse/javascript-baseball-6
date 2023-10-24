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

5. 사용자의 숫자에 대한 결과를 출력하는 기능
6. 게임을 재시작하는 기능
    - 반복문 안에 선언하여 프로그램이 한번에 종료되지 않게 하기
7. 게임 초기화 세팅