# :computer: [FE] JonghyunLEE12



###  :white_check_mark: 구현 로직 순서

- [x] startGame() 메소드를 이용해 게임 시작

  - [x] getAnswerUserNumber(); 호출

    - [x] makeAnswer(); => 정답 번호를 받아오는 함수

    - [x] inputUserNumber(); => 사용자 입력을 받아오는 함수

      - [x] 사용자 입력값 유효성 검사

    - [x] checkingStrike(); => 정답값과 입력값 비교하여 스트라이크 & 볼 체크

  - [x] getUserReGame(); => 3스트라이크 완성 시, 사용자 재게임 여부 확인 메소드

    - [x] endGame(); => 3스트라이크 완성 출력

    - [x] reGame(); => 게임 다시 시작 변수를 입력받는 함수

      - [x] 사용자 입력값 유효성 검사

  - [x] 게임 다시 시작 ?  startGame() 메소드 호출 :  gameOver(); => 게임종료 안내문 함수 호출



### :warning: 기능 구현 중 이슈



#### :heavy_exclamation_mark: 첫번째 이슈

##### JS 비동기 처리 이슈

GamePlay while문으로 반복하며 사용자 입력을 받으려고 했으나,

Controller 클래스 getInputNumber() 함수 안에  사용자의 입력을 기다리는 상황에서

while 문이 입력을  async/await 비동기 데이터 전달을 기다려주지 않아서 이슈가 발생 했다.

> #### 해결 : getInputNumber(); 함수 안에 while문 넣어서 해결



####  :heavy_exclamation_mark:두번째 이슈

##### thorw 문으로 예외사항 처리 중 코드가 pass가 되지 않는다.

로직을 처음부터 다시 코딩하게 되었다.

>#### 해결 : 비동기 처리 방식에서 발생한 throw을 상위 메소드에 전달하지 못했다.
try, catch문을 통해 에러 발생시 , catch문에서 throw를 전달하고
최종적으로는 App 클래스의 play() 메소드에 전달함으로써 해결할 수 있었다.

##### 코드

```js
async play() {
    await this.GAME.startGame();
}
  
// USER 
  try {
    CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync(INPUT_MSG.INPUT_NUMBER);
    this.VAL.numberValidate(CONSTANTS.USER_NUMBER);
  } catch (error) {
    throw error;
 }

startGame = async () => {
        MissionUtils.Console.print(OUTPUT_MSG.START_GAME);
        await this.#getAnswerUserNumber();
    }

#getAnswerUserNumber = async () => {
        this.CON.makeAnswer();
        await this.CON.inputUserNumber();
    }
```



####  :heavy_exclamation_mark:세번째 이슈

##### Console.print(); 가 올바른 값을 출력하나, PASS가 되지 않음

> #### 해결 : 게임 재개시, 유저의 값을 비동기 형식으로 받았어야 하는데 해당 부분을 놓쳤다.



##### 코드

```js
// 이전 코드
#getAnswerUserNumber = async () => {
        this.CON.makeAnswer();
        while (true) {
            STRIKE_BALL.STRIKE = 0;
            STRIKE_BALL.BALL = 0;
            await this.CON.inputUserNumber();
            this.CON.checkingStrike(CONSTANTS.USER_NUMBER);
            this.OUT.printResult();
            if (STRIKE_BALL.STRIKE === 3) break;
        }
        this.#getUserReGame();
}
// 해결 코드
#getAnswerUserNumber = async () => {
        this.CON.makeAnswer();
        while (true) {
            STRIKE_BALL.STRIKE = 0;
            STRIKE_BALL.BALL = 0;
            await this.CON.inputUserNumber();
            this.CON.checkingStrike(CONSTANTS.USER_NUMBER);
            this.OUT.printResult();
            if (STRIKE_BALL.STRIKE === 3) break;
        }
        await this.#getUserReGame();
}

```



#### :heavy_exclamation_mark:네번째 이슈

##### REGAME ERROR 테스트케이스 작성 중,

##### 첫게임 통과 후 두번째 게임 중 게임 종료 후 다시 재게임 변수 받는 과정에서 에러 발생

> #### 해결 : 처리된 ERROR 결과를 최상위 클래스 까지 전달하지 못해서 생긴 이슈 (비동기 처리)



##### 코드

```js
//이전 코드
        await this.CON.endGame();
        (CONSTANTS.REGAME_CONSTANTS == 1) ? this.startGame() : this.#gameOver();
    }

//해결 코드

        await this.CON.endGame();
        (CONSTANTS.REGAME_CONSTANTS == 1) ? await this.startGame() : this.#gameOver();
    }

// 재게임 선언시, 다시 startGame으로 돌아가야하는데, 이때 역시 await처리를 해줘야한다.
```



### :microphone: 1주차 미션 소감

#### 숫자 야구 게임을 구현 하면서 

1. `미션 요구사항 지키기`
2. `MVC패턴을 기반으로 로직 구성하기`
3. `Class 선언으로 모듈화하기`

##### 이 세가지를 목표로 코드를 작성하였습니다.

###### 실제 로직을 작성하던 중 비동기 처리에 있어 throw 로 ERROR를 발생하는 부분에 이슈가 있었고,

###### 다시 차근차근 구현 로직을 작성하면서 결국 최상위 메소드 까지 ERROR 를 전달해 줄 수 있었습니다.

###### 이번 숫자 야구 게임 미션을 통해 비동기 처리에 대한 이해와 디자인 패턴을 기반으로한 로직을 작성할 수 있었습니다!
