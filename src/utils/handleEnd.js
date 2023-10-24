import { validGameEndInput } from "./Validate";
import { printOutput } from "./MissionUtils";

const handleEnd = {
  isGameEnd: (input) => {
    validGameEndInput(input);
    if (input === "1") return false;
    if (input === "2") return true;
  },

  printGameEnd: () => {
    printOutput("게임 종료");
  },
};

export default handleEnd;
