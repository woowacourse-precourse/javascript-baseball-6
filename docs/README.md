# javascript-baseball-6

## 작성자
프론트엔드 6기 참가자 조수민


## 기능 설명

컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.

사용자는 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력한다.

사용자의 수와 컴퓨터의 수를 비교한다.

같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 없으면 낫싱을 출력한다.

컴퓨터가 선택한 수를 맞추면 승리한다.

잘못된 값이 입력될 경우 에러와 함께 프로그램은 종료 된다.

## 컨셉
우리가 실제 숫자 야구게임을 할 때를 떠올려봤다.

상대방은 내 숫자를 듣고 판정 결과를 알려줄 뿐이다. 상대방의 값은 오로지 판정 결과로 예측해야 한다.

이 과정을 구현하고 싶어서 oop를 활용했다.

게임의 참가자인 유저와 컴퓨를 추상화 하여 opponent와 player로 만들었다.

player는 상대방 값에 접근할 수 없고, 내가 예상한 숫자를 

파라미터로 하는 judgeResult 메소드를 호출하여 computer로부터 결과 메세지를 돌려받는다.

마찬가지로 computer 객체는 상대방 값을 받아서, 

strike, ball, nothing의 정보가 적힌 객체(메세지)를 돌려준다.

App.js는 게임을 진행시키는 '심판'과 같은 역할을 수행한다.

심판 또한 각자 객체의 값에 직접 접근할 수 없다.


## 구조
```
+ src
  + constants  ------  constant를 모아둔 폴더
    └ constants.js --- constants를 선언한 파일
	+ players	---------- 게임 플레이어 객체를 모아둔 폴더
		└ opponents.js	-- 게임의 상대방인 컴퓨터
		└ player.js	------ 숫자를 입력하는 유저
	+ view
		└ view.js	-------- 입출력을 관리하는 객체
  └ App.js  ---------  프로그램 실행 진입점이자 controller
```

## 구현 기능 목록

게임의 플레이어인 player

게임의 상대방 즉 랜덤한 번호를 가진 computer

input과 output을 컨트롤 하는 view


### player

** inputNumber() **

- 1부터 9까지 임의의 수 3개를 공백없이 입력받는다
- Validation을 체크하여 Exception이 생기면 throw를 통해 예외를 발생시키고 프로그램 종료한다


**getJudgeResult(opponent)**

- opponent 객체에게 playerNumber를 보낸 후 결과값을 리턴 받는다


**isValidNumber(playerNumber)**

- playerNumber의 유효성을 검사한다
	- [x] [Exception] 숫자가 아닌 다른 문자를 입력한 경우
	- [x] [Exception] 숫자의 중복이 존재할 경우
	- [x] [Exception] 3개 이상의 숫자를 입력한 경우


**hasDuplicates(playerNumber)**

- isValidNumber에 필요한 중복 검사 메소드


### computer

**constructor()**

- makeRandomNumber() 를 호출하여 랜덤한 번호를 생성


**makeRandomNumber()**

- 3자리의 정수를 생성한다
	- [x] Random.pickNumberInRange()를 사용한다


**judgeResult(playerNumber)**

- playerNumber를 인자로 받아 strike, ball, nothing의 결과값을 반환한다


### view

**printMessage(message)**

- 메세지를 인자로 받아 출력한다
	- [x] Console.print를 사용한다

**readInput()**

- 입력을 받아서 값을 반환한다
	- [x] Console.readLineAsync를 사용한다


### 구조를 바꾸게 된 이유


- javascript에 대한 이해 부족

return을 명시적으로 하지 않으면 undefined를 반환한다는 사실을 몰랐다. 때문에 콘솔에 출력 결과는 정상적으로 나오지만 jest.fn() 을 통해 mock 함수로 테스트를 하면 테스트 케이스에서 결과값이 제대로 리턴되지 않았다.


- 객체 지향에 집중

이번 주차에 MVC 패턴을 어설프게 적용하기 보다는 제대로 학습하여 설계하자는 생각을 하였다. 때문에 더 객체 지향적 설계에 집중하기로 했다.

