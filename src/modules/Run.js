import ConvertInputTo from "./ConvertInputTo.js";
import Get from "./Get.js";
import Print from "./Print.js";
import Is from "./Is.js";

class Run {
  static async baseball() {
    const computerList = Get.randomList();
    while (true) {
      const userList = await ConvertInputTo.list();
      const counts = Get.countsFrom(computerList, userList);
      Print.resultsFrom(counts);
      if (Is.gameOverBy(counts)) return Print.runEndMessage();
    }
  }
}

export default Run;