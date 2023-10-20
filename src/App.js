import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    const Target = getRandom();
    console.log(Target.join(''));  
  }
}

export default App;

const app = new App();
app.play();

function getRandom(){
  const Target = [];
  var count = 3;
  while(count>0){
    var a;
    a = MissionUtils.Random.pickNumberInRange(1,9);
    if(Target.includes(a)){
      continue;
    }
    Target.push(a);
    count--;
  }
  return Target;
}