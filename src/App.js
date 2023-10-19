import { MissionUtils } from "@woowacourse/mission-utils";
function cpuPickNum(){
  const cpuNumArr = [];

  while(cpuNumArr.length < 3){
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if(!cpuNumArr.includes(number)){
      cpuNumArr.push(number);
    }
  }
  return cpuNumArr;
}
class App {
  async play() {
    let cpu = cpuPickNum();

    return;
  }
}

const app = new App();

app.play();

export default App;
