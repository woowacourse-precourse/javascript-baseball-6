import randomNumSet from "./util/randomNumSet.js";
import answering from "./util/answering.js";
import restartCheck from "./util/restartCheck.js";
import numConstant from "./constant/constant.js";

class App {
  async play() {
    //게임 진행 여부 확인.
    let gamingStatus = true;
    while (gamingStatus) {
      //computer 숫자 세팅
      const computer = randomNumSet(numConstant.NUMSIZE);

      //사용자와 게임 진행
      await answering(computer);

      //종료후 재시작 여부 확인
      gamingStatus = await restartCheck();
    }
    return;
  }
}
export default App;
