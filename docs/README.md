## 구현할 기능 목록

### 멤버 변수

- random_number : 랜덤으로 생성한 숫자. 배열로 한 숫자씩 저장한다.
- user_number: 사용자가 입력한 숫자. 배열로 한 숫자씩 저장한다.

- answer : 숫자에 대한 결과를 알려주고, 게임이 종료되면 true, 답을 맞추지 못하면 false 를 반환한다. 이 값으로 restart 할 지 결정한다.

### 메소드

- play : 게임 시작을 알리는 함수. 시작 함수가 있고, 에러를 처리한다.
- gameStart : getRandomNumber, getUserInput 함수를 실행한다.
- getUserInput : 비동기 함수이며 사용자에게 숫자를 입력받는 시간동안 다음에 오는 코드를 실행하지 않게 하기 위해 await 을 붙여줬다. 입력받은 값이 testUserNumber 을 통과하지 못할경우 에러를 던진다. 통과하는 경우 user_number 에 숫자로 변환해서 하나씩 배열에 넣어준다. 그리고 함수에 돌려 결과값을 얻고, 그 결과값을 토대로 답을 출력해준다. 답이 맞을경우 restart 함수를 실행하고, 답이 틀릴경우 다시 입력할 수 있도록 getUserInput()를 호출해준다.

- getRandomNumber : 1~9 사이 중복되지 않는 3자리의 랜덤 숫자를 생성한 후 배열로 저장한다.
- isDuplicationInRandomNumber: 랜덤 숫자를 생성할 때 중복된 값이 있는지 확인해주는 함수

- restart : 게임 재시작 함수. 1을 입력받을 경우 값을 초기화 한 후 재시작 하고, 2를 입력받을 경우 게임을 종료, 잘못된 값을 입력할 경우 에러를 던진다.

- testUserNumber: 입력된 숫자가 숫자형인지 확인 후 배열에 넣고 isDuplicationInUserNumber, isRange, isLength 를 이용해 옳은 숫자인지 판단한다. 옳은 숫자면 true 를 반환한다.
- isDuplicationInUserNumber : 입력된 숫자에 중복된 값이 있는지 확인한다.중복 값 있으면 true
- isRange:1~9 사이의 숫자인지 확인한다., 모두 사이 숫자면 true
- isLength : 입력된 숫자의 길이가 3인지 확인한다. 길이 3 아니면 false

- numberOfHits: 랜덤 숫자와 입력된 숫자를 비교하여 스트라이크와 볼이 각각 몇개인지 계산한다. 계산된 결과는 SCORE에 배열로 차례로 저장된다.

- printAnswer : 답을 출력한다.(1볼 2스트라이크..) 정답을 맞추면 게임을 종료하고 ANSWER을 true 로 바꾼다.
