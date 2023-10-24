import gameStart from "../src/controller/game-controller.js";

class App {
  async play() {
    try{
      await gameStart();
    }catch(err){
      throw err;
    }
   
  }
}
export default App;

