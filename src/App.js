import randomNumber from "./randomNumber.js";
import getPlayer from "./getPlayer.js"
import {printStart} from "./print.js"
import compare from "./compare.js";
import getStart from "./getStart.js";

class App {
  async play() {

    let isRestart = true;
    
    while(isRestart) {
      printStart();
      const computer = randomNumber();
      let player = await getPlayer();
 
      while(!compare(player, computer)) {
        player = await getPlayer();
      }
      isRestart = await getStart();
    }

  }
}

export default App;
