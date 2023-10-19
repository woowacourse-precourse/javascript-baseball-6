import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  
  printStaticMessage(message) {
    Console.print(message);
  },
  
  progressMessage() {
    // 게임 진행상황별 메세지 ,분기처리 로직필요
  },
}

export default OutputView;