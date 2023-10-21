import Pipe from "./Pipe.js";
import Calculate from "./Calculate.js";
import Print from "./Print.js";
class Board {
  static async run(computerList) {
    while (true) {
      const inputList = await Pipe.listPipe();
      const counts = Calculate.getCounts(computerList, inputList);
      Print.printCounts(counts);
      if (counts.strikeCount == 3) return Print.printRunEndMessage();
    }
  }
}

export default Board;