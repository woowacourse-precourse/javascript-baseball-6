import createAnswer from "./util/createAnswer.js";
import handleInput from "./util/handleInput.js";
import compareInputWithAnswer from "./util/compareInputWithAnswer.js";
import returnResultMessage from "./util/returnResultMessage.js";
import handleProgress from "./util/handleProgress.js";

class App {
  async play() {
    let answerLog = [];
    let progressStatus = "1";

    while (progressStatus === "1") {
      answerLog = createAnswer([...answerLog]);
      let threeStrike = false;
      let input;
      let ballsAndStrike;
      let message;

      while (!threeStrike) {
        input = await handleInput();
        ballsAndStrike = await compareInputWithAnswer(answerLog, input);
        threeStrike = ballsAndStrike.strike === 3 && ballsAndStrike.ball === 0;
        message = await returnResultMessage(ballsAndStrike);
        progressStatus = await handleProgress(message);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
