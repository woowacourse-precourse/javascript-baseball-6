import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.play(); 
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const correctNums = this.getCorrectNums();
    await this.goSwing(correctNums);
  }

  async goSwing(correctNums) {
    const inpuNums = await this.getInputNums();
    const [resultStr,isSuccess] = this.compareNums(correctNums, inpuNums);
    Console.print(resultStr);
    if(!isSuccess){
      this.goSwing(correctNums);
      return;
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const reGameYn = await this.getReGameYn();
    if(reGameYn) {
      const correctNums = this.getCorrectNums();
      this.goSwing(correctNums);
    }
  }

  async getReGameYn() {
    const reGameYn = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return reGameYn == 1 ? true : false;
  }

  async getInputNums() {
    const inputNums = await Console.readLineAsync("숫자를 입력해주세요 :");
    return inputNums.split("").map(Number);
  }
  
  getCorrectNums() {
    const correctNums = new Set();
    while(correctNums.size < 3){
      const num = Random.pickNumberInRange(1, 9);
      correctNums.add(num);
    }

    return [...correctNums];
  }

  compareNums(correctNums, inputNums) {
    // [ball, strike]
    const result = [0,0];
    inputNums.forEach((el,i) => {
      if(el == correctNums[i]){
        result[1]+=1;
        return;
      }
      if(correctNums.includes(el)){
        result[0]+=1;
      }
    });

    const resultStr = result.reduce((acc, count,i) => { 
      if(!count) return acc
      if(!i) return `${count}볼`;
      return result[0] ? `${acc} ${count}스트라이크` : `${count}스트라이크`;
    },'낫싱')
    const isSuccess = result[1] === 3;

    return [resultStr, isSuccess]
  }
}

new App();

export default App;
