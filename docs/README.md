# 미션 - 숫자 야구 구현할 기능 목록   

### 🔗 생각해봐야 할 점   

- 사용자는 서로 다른 3가지의 수를 입력한다.   
  - 여기서 3가지의 수가 아닌 입력을 받았을 경우를 *예외처리* 한다.   

  - 게임 중 3가지의 수를 입력받는 것과, 게임을 재시작 할지에 대한 입력받는 것 총 두가지의 경우가 있다.    


- 출력 문구에서 띄어쓰기를 주의할 것.   


<br><br><br>   


### 🔎 기능 구현 (풀기 전 생각 정리)       

- 먼저 주어진 api를 이용해서 랜덤 수를 뽑아낸다.   

- 이후 `include` 메서드와 `indexOf` 메서드를 이용해서 스트라이크, 볼 판정을 한다.   
  - 스트라이크, 볼 출력 결과에서, *볼이 있는 경우에만* 볼을 추가하는 반복문을 사용한다.     

  - 최대한 코드 길이를 줄이기 위함.   


- 스트라이크, 볼 을 담아둔 객체를 이용해서, 3스트라이크 인 경우 게임을 종료한다.      


- 게임 종료 이후에, 재시작을 위한 입력을 받는다.   
  - 1 또는 0 으로 게임의 재시작을 결정한다.   


- 오류에 대한 처리는 두 입력에 대한 것을 만들면 된다.   
  - 정답 수를 맞추기위한 입력, 재시작을 위한 입력


<br><br><br>


### 🪫 풀이 코드 (첫 코드)    

<br>

- 먼저 컴퓨터(정답)수를 `Random.pickNumberInRange`메서드를 이용해 만든다.   

  ```javascript
  constructor (){
      this.answerNumber = this.makeAnsNumber();
    }
  ```   

- 이후 스트라이크, 볼 을 판단하기 위한 함수를 만든다.   

  ```javascript
  checkNumber(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    inputNumber.map((num) => {
      let idx = inputNumber.indexOf(num);
      if (answerNumber.includes(num)) {
        if (answerNumber[idx] === num) strike++;
        else ball++;
      }
    })
    return [strike, ball];
  } 
  ```   
  *includes를 이용해 수가 들어있는지 확인하고, indexOf를 이용해 순번도 확인한다.*   

<br>

- 이제 사용자로부터 수를 입력받으며, 게임을 진행하는 함수를 만든다.   

  ```javascript
  async play() {
    Console.print(`${START_MESSAGE}`);

    while (true) {
      // 숫자를 입력받고 볼, 스트라이크 판정하는 부분.
      let inputNumber = await this.makeInputNumber();
      if (!inputNumber) break;
      let [strike, ball] = this.checkNumber(this.answerNumber, inputNumber);
      if (strike === 0 && ball === 0) Console.print(`${NOTHING}`);
      else if (strike === 0) Console.print(ball + `${BALL}`);
      else if (ball === 0) Console.print(strike + `${STRIKE}`);
      else Console.print(ball + `${BALL}` + ' ' + strike + `${STRIKE}`);
    
    ... 생략
  ```   

<br>


- error 처리를 하기 위해서, ```try ... catch``` 문을 사용한다.   

  ```javascript
  async makeInputNumber() {
    try{
      let inputNumber = await Console.readLineAsync(`${INPUT_MESSAGE}`);
      this.checkInputNumber(inputNumber);
      inputNumber = [...inputNumber].map(el => +el);
      return inputNumber;
    }
    catch (error){
      Console.Print(error.message)
    }
  }

  // 사용자 수에서 error를 찾는 메서드
  checkInputNumber(inputNumber) {
    if (inputNumber.length !== 3 || isNaN(inputNumber)) throw new Error(`${ERROR_MESSAGE}`);
  }

  ```   

  - 하지만, 이 때문에 테스트 케이스의 오류 부분이 계속 문제가 발생했다.   

  - 처음에 문제의 원인을 파악하지 못하다, ```try ... catch``` 문과 ```throw```문을 같이 쓴 것이 문제가 된것 같다.(?)

  - ```try ... catch```문은 삭제하고, ```throw``` 문만을 사용해서 수정하였다.    

<br>

  -  *수정코드*
      ```javascript
      async makeInputNumber() {
        
        let inputNumber = await Console.readLineAsync(`${INPUT_MESSAGE}`);
        this.checkInputNumber(inputNumber);
        inputNumber = [...inputNumber].map(el => +el);
        return inputNumber;
      }
      ```


<br><br>


### 따로 더 공부할 내용.   

- async, await, Promise (비동기 처리방식의 동기처리).  

- try, catch, throw   (오류 처리)

- jest (테스트 케이스의 작동)