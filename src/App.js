import * as MissionUtils from '@woowacourse/mission-utils'
const userNum = MissionUtils.Console.readLineAsync('')

const getRandomNum = () => {
  const computerNum = []
  while (computerNum.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1,9)
    if(!computerNum.includes(randomNum)) {
      computerNum.push(randomNum)
    }
  }
}

class App {
  async play() {
    
    
  }
}

export default App;
