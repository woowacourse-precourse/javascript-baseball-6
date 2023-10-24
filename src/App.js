//App.js

class App {
  async play() { 
     // 컴퓨터가 생각하는 3개의 숫자를 생성
     const computer = await MissionUtils.Random.pickNumbersInRange(1, 9, 3);

     // 게임 반복하기 위한 while문
     while (true) {
       // 플레이어의 입력을 받음
       const input = await Console.readLineAsync();
 
       // 플레이어의 입력을 컴퓨터가 생각하는 숫자와 비교하여 결과를 출력
       const result = this.guess(input, computer);
       Console.print(result);
 
       // 게임이 종료되는 시점, break
       if (result === "3스트라이크") {
         break;
       }
     }
 
     // 게임을 다시 시작할지 여부를 물어봄
     const restart = await Console.readLineAsync();
 
     // 게임을 다시 시작하려면 다시 시작
     if (restart === "1") {
       return this.play();
     }
 
     // 게임을 종료
     return;
  }//END Play
  
    // 플레이어의 입력을 컴퓨터가 생각하는 숫자와 비교하여 결과 반환
    guess(input, computer) {
    const numbers = input.split("");

    // 스트라이크의 개수 계산
    const strikes = numbers.filter((number, index) => number === computer[index]);
    const strikeCount = strikes.length;

    // 볼의 개수 계산
    const balls = numbers.filter((number) => computer.includes(number));
    const ballCount = balls.length - strikeCount;

    return `${strikeCount}스트라이크 ${ballCount}볼`;
    }//END Guess

}//END App

export default App;
