import Pipe from "./Pipe";
import Calculate from "./Calculate";
import Print from "./Print";
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