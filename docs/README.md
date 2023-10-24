# Big Skectch

- ### Baseball.js 
  볼, 스트라이크, 낫싱 결과값을 계산후 내보내는 곳

* * * *

- ### Constans.js   
  게임중 출력되는 모든 메세지들을 모아둔 곳
* * *

- ### RandomNumber.js 
  서로 다른 3자리 랜덤값을 도출하는 곳
* * *

- ### Exception.js 
  올바른 형식이 아닌 사용자 입력에 대한 예외 처리실
* * *

- ### App.js   
  Baseball.js + Constants.js + RandomNumber.js + Exception.js 
* * *
<br>
<br>
<br>

# Small Sketch

> Baseball.js 
- class Baseball 
- 사용자 입력과 컴퓨터 랜덤값을 인자로 받아 게임 결과값을 반환 
- const baseball = new Baseball(사용자입력, 컴퓨터 랜덤값)
- baseball.outcome() = 게임 결과값(String)

<br>

> Exception.js
- class Exception 
- 메서드 전원 static 적용
- Exception.isNonException(사용자 입력) = true or false
- 사용자 입력을 인자로 받아 예외가 없으면 true 예외가 있으면 false를 반환
- 사용자 입력값 예외 : 숫자 1 - 9 이외의 모든 것
- 사용자 입력값 예외 : 네자리 수 이상의 모든 것
- 사용자 입력값 예외 : 중복이 포함된 모든 것

<br>

> Constants.js

  object MESSEAGE = {
  - START_GAME : '숫자 야구 게임을 시작합니다.'
  - INPUT_NUMBER : '숫자를 입력해주세요 : '
  - BALL : '볼'
  - STRIKE : '스트라이크'
  - NOTHING : '낫싱'
  - CELEBRATE_END : '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
  - RESTART_EXIT : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요' 
  - STRIKEOUT : '3스트라이크'
  - RESTART : '1'
  - EXIT : '2'
  - ERROR : '[ERROR] 숫자가 잘못된 형식입니다.'

  }

<br>

> RandomNumber.js

- class RandomNumber
- 하나의 static 메서드로 이루어짐
- RandomNumber.computer() = 1부터 9로 이루어진 길이가 3인 unique 배열

<br>

> App.js 

class App with imported ...

- outcome() from class Baseball  
- isNonException() from class Exception  
- computer() from class RandomNumber   
- MESSEAGE from Constans object 

<br>
<br>
<br>

# App.js

class App {    

> ## numberAsking
>  1. '숫자를 입력해주세요 : ' 콘솔 출력
>
>  2. 사용자 입력을 받는다
>
>  3. 사용자 입력에 대한 예외처리 
>
>  4. 숫자 야구 결과 반환    
> >  
  

> ## choiceAsking
>  1. '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 콘솔 출력
>
>  2. '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요' 
콘솔 출력
>  
>  3. 사용자 선택을 입력 받는다 
>
>  4. 사용자 선택 입력에 대한 예외처리
>
>  5. 사용자 선택 입력값 반환
> >
> ## start
>  1. numberAsking 을 실행한다
>
>  2. numberAsking 반환 값이 '3스트라이크' 가 아니면 start 
재실행
>
>  3. numberAsking 반환 값이 '3스트라이크' 라면 determine 실행
> > 
> ## replay
>  1. start 실행
>
>  2. start 가 최종 종료 될 때까지 기다림 
>
>  3. determine 실행
>
>  4. determine 가 최종 종료 될 때까지 기다림
> > 
> ## determine
>  1. choiceAsking 을 실행한다.
>
>  2. choiceAsking 반환 값이 "1" 이라면 replay 실행
>
>  3. choiceAsking 반환 값이 "2" 이라면 함수 종료  
> >
> ## play
>  1. '숫자 야구 게임을 시작합니다.' 콘솔 출력
>
>  2. start 실행
>
>  3. start 가 최종 종료 될 때가지 기다림
>
>  4. determine 실행
>
>  5. determine 가 최종 종료 될 때까지 기다림
>
>  6. determine 이 최종 종료되면 프로그램 종료    

}
<br>
<br>

# 프로그램 시작
```javascript
const app = new App();   
app.play();
```





