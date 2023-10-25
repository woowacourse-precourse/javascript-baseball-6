# [과제의 요구 사항에 따른 요구 기능 목록](#과제의-요구-사항에-따른-요구-기능-목록)  
> notice 우테코 6기 1주차 - 야구 게임   
# [class 목록](#class-목록)
#### [1. 컴퓨터(Computer) 클래스](#컴퓨터-클래스)
#### [2. 사용자(User) 클래스](#사용자-클래스)
#### [3. 문자열규칙판독기(RuleChecker) 클래스](#규칙판독기-클래스)
#### [4. 게임규칙판독기(Referee) 클래스](#게임규칙판독기-클래스)
#### [5. 게임(App) 클래스](#게임-클래스)

# [클래스 기능 설명](#클래스-기능-설명)
## [컴퓨터 클래스](#class-목록)
> 역할 - 랜덤으로 생성된 수(정답)를 저장하고 관리한다.
### [1. constructor - computer](#1-constructor---computer)
- computer 클래스의 생성자.
- 객체변수 `name`을 초기화 후 저장한다.
### [2. makeRandomNum](#2-makerandomnum)
> notice static 함수
- `1부터 9까지의 랜덤한 수(문자)로 1개 리턴`
### [3. makeRandomNumList](#3-makerandomnumlist)
- `객체변수` `numberList(Array)`를 생성한다.
- `makeRamdomNum`을 3번 호출하여 리턴된 수 3개를 `numberList`에 저장한다.
- `numberList의 인자 수`를 `객체변수` `length`에 저장한다.
### [4. returnComputerRandomNumber](#4-returncomputerrandomnumber)
- `객체변수` `numberList`를 리턴한다.
## [사용자 클래스](#class-목록)
> 역할 - 사용자로부터 입력받은 수를 저장하고 관리한다.
### [1. constructor - user](#1-constructor---user)
- user 클래스의 생성자.
- 객체변수 `name`을 초기화 후 저장한다.
### [2. inputNumberList](#2-inputnumberlist)
- `객체변수` `numberList(Array)`를 생성한다.
- `표준입력으로 받은 문자열`을 numberList에 저장한다.
- numberList의 인자 수를 `객체변수` `length`에 저장한다.
### [3. returnUserInputNumber](#3-returnuserinputnumber)
- `객체변수` `numberList`를 리턴한다.
## [문자열규칙판독기 클래스](#class-목록)
> 역할 - 사용자가 입력한 수가 게임 규칙에 맞는지를 판단한다.
### [1. constructor - RuleChecker](#1-constructor---rulechecker)
- RuleChecker 클래스의 생성자.
- 객체변수 `name`을 초기화 후 저장한다.
- `'1', '2', '3', '4', '5', '6', '7', '8', '9'`를 인자로 저장하는 배열 `객체변수` `checkArray`를 생성한다.
### [2. inputObj](#2-inputobj)
- `객체 userobj를 인자`로 받는다.
- 인자 userobj의 내부변수 `name`이 `user가 아닐 경우` ERROR를 throw한다.
- RuleChecker의 메소드 `this.lengthCheck, this.isNumberCheck, this.isSameNumber`를 각각 호출한다.
- lengthCheck은 `objuser의 내부변수인 length를 매개변수`로한다.
- isNumberCheck은 `objuser의 내부변수인 numberList를 매개변수`로한다.
- isSameNumber은 `objuser의 내부변수인 numberList를 매개변수`로한다.
### [3. lengthCheck](#3-lengthcheck)
> notice static 함수
- 인자로 `length(정수)`를 받는다.
- `length가 3 미만`일 경우 ERROR를 throw한다.
- `length가 3 초과`일 경우 ERROR를 throw한다.
- `해당 사항 없을 시` lengthCheck 함수는 종료된다.
### [4. isNumberCheck](#4-isnumbercheck)
- 인자로 `numberList(배열)`를 받는다.
- `numberList`의 요소들과 `RuleChecker의 내부변수 checkArray`의 요소들`('1', '2', '3', '4', '5', '6', '7', '8', '9')`의 값을 각각 비교한다.
- `numberList`에 `checkArray에 해당하는 값이 없을 경우` ERROR를 throw한다.
- `해당 사항 없을 시` isNumberCheck 함수는 종료된다.
### [5. isSameNumber](#5-issamenumber)
> notice static 함수
- 인자로 `numberList(배열)`를 받는다.
- numberList의 요소들 중 `중복되는 값이 존재할 경우` Error를 throw한다.
- `해당 사항 없을 시` isSameNumber 함수는 종료된다.
### [6. oneOrTwo](#6-oneortwo)
> notice static 함수
- 인자으로 `length(정수)와 numberList(배열)`을 받는다.
- length가 `1이 아닐 경우` ERROR를 throw한다.
- numberList의 0번째 index의 요소 값이 `'1'이나 '2'가 아닐 경우` ERROR를 throw한다.
- numberList의 0번째 index의 요소 값이 `1일 경우` `true`를 리턴한다.
- numberList의 0번째 index의 요소 값이 `2일 경우` `false`를 리턴한다.
## [게임규칙판독기 클래스](#class-목록)
> 역할 - 사용자의 입력 값과 컴퓨터의 랜덤 값(정답)을 비교하여 게임 규칙에 맞게 판정을 출력해준다.
### [1. constructor - Referee](#1-constructor---referee)
- Referee 클래스의 생성자.
- 객체변수 `name`을 초기화 후 저장한다.
- 객체변수 `ball(정수)`, `strike(정수)`의 값을 0으로 초기화 후 저장한다.
- 객체변수 `nothing(bool)`의 값을 false로 초기화 후 저장한다.
### [2. checkJudgment](#2-checkjudgment)
- 인자로 `computerList(배열)`와 `userList(배열)`을 받는다.
- computerList와 userList의 index 0부터 2까지 `동일한 index의 요소 값을 각각 비교`한다.
- 동일한 index의 요소 값이 같을 경우 `즉시` Referee의 `객체변수` `strike`에 1을 더한다.
- `userList 요소` 중에서 `computerList 요소`와 요소 값이 `같은 요소의 갯수`를 `Referee 객체변수 strike`에 뺀 값을 Referee의 `객체변수 ball`에 저장한다.
- `객체변수 ball`과 `객체변수 strike`가 모두 0일 경우 `객체변수 nothing은 true`로 저장된다.
- `객체변수 ball`과 `객체변수 strike`중 하나라도 0이 아닐 경우 `객체 변수 noting은 false`로 저장된다.
### [3. printJudgment](#3-printjudgment)
- `지역변수 str(문자열)`을 빈 문자열로 초기화한다.
- `객체변수 nothing이 true일 경우` str에 `낫싱`을 추가한다.
- `객체변수 ball이 0보다 클경우` str에 `(ball의 갯수)볼`을 추가한다.
- `객체변수 strike가 0보다 클경우` str에 `(strike의 갯수)스트라이크`를 추가한다.
- `지역변수 str을 출력`한다.
### [4. continueGame](#4-continuegame)
- `지역변수 answer(bool)`를 false로 초기화한다.
- `객체변수 strike의 값이 3과 같다면` answer는 true로 저장된다.
- `객체변수 ball, strike의 값을 0`으로 저장한다.
- `객체변수 nothing을 false`로 저장한다.
- `지역변수 answer`를 리턴한다.
## [게임 클래스](#class-목록)
> 게임을 진행과 종료를 컨트롤한다.
### [1. constructor - App](#1-constructor---app)
- `class RuleChecker, Computer, User, Referee`를 App클래스 객체변수로 생성하고 저장한다.
- 객체변수 `name`을 초기화 후 저장한다.
- 객체변수 `continue`를 ture로 초기화 후 저장한다.
### [2. play](#2-play)
> notice user, computer, referee, ruleChecker는 인스턴트화 된 App 내부 객체이다.
- `숫자 야구 게임을 시작합니다.`를 출력한다. (시작시 한번만)
#### App의 객체 변수 continue가 true일 경우 밑의 과정이 반복된다.
---
- `computer는 랜덤한 수를 저장한 배열을 생성하여 저장`한다.([computer 참조](#컴퓨터-클래스))
#### Referee의 gamecontinue가 true를 리턴하기 전까지 아래의 공정은 반복됩니다.
---
- user에 입력된 문자열(배열) rulechecker로 체크한다. `rulechecker가 ERROR throw 시 프로그램은 종료`된다.([[user](#사용자-클래스)와 [ruleChecker](#문자열규칙판독기-클래스)]를 참조)
- referee가 user와 computer의 저장된 배열을 비교한다. referee는 조건에 맞는 문자열을 출력한다.([Referee](#게임규칙판독기-클래스) 참조)
#### referee.continueGame이 true를 리턴했을 경우
- `3개의 숫자를 모두 맞히셨습니다! 게임 종료`를 출력한다.
- `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`를 출력한다.
- user 객체가 받은 표준입력을 rulechecker가 체크한다. `rulechecker ERROR throw 시 프로그램은 종료`된다.([[user](#사용자-클래스)와 [ruleChecker](#6-oneortwo)]를 참조)
- 객체변수 continue는 ruleChecker.oneOrTwo로부터 값을 리턴받는다.