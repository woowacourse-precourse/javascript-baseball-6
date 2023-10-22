import { MissionUtils } from "@woowacourse/mission-utils";
import * as func from "./Functions.js";

class Pract {
  async play() {
    MissionUtils.Console.print(func.createRandomNumber());
    MissionUtils.Console.print(await func.getUserNumber());
  }
}
const pract = new Pract();
pract.play();

export default Pract;
