import Filter from "./Filter.js";
import Calculate from "./Calculate.js";
import Print from "./Print.js";
class Board {
  static async run(computerList) {
    while (true) {
      const inputList = await Filter.list();
      const counts = Calculate.counts(computerList, inputList);
      Print.counts(counts);
      if (counts.strikeCount == 3) return Print.runEndMessage();
    }
  }
}

export default Board;