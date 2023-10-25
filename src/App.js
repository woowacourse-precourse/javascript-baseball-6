import generateRandomNumber from './GenerateRandomNumber';
import getUserNumber from './GetUserNumber';
import getResult from './GetResult';
import answerAndAskUser from './AnswerAndAskUser';
import startGame from './StartGame';
class App {
  constructor() {
    this.targetNumber = generateRandomNumber();
  }
  async play() {
    startGame();
    while(1){
      let userInput = await getUserNumber();
      let result = getResult(this.targetNumber,userInput);
      let playAgain= await answerAndAskUser(result);
      if(playAgain==='1') {
        this.targetNumber = generateRandomNumber();
      }

      else if(playAgain==='2') {
        break;
      }

    }

    return ;
  }

};

export default App;
