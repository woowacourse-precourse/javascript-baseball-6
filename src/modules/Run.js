import ConvertInputTo from "./ConvertInputTo";
import Get from "./Get";
import Print from "./Print";
import Is from "./Is";

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