import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Message';
import randomNum from './RandomNum';
import userInput from './UserInput';
import valid from './ValidNum';
import { result, resultPrint } from './Result';
import restart from './Restart';

class App {
  async play() {
    Console.print(MESSAGE.START)
    const randomNumber = randomNum();
    let isPlaying = true;
    
    while(isPlaying === true){
      const input = await userInput();
      try{
        valid(input)
        Console.print(input)
        const userInput = [...input].map(Number)
        const gameResults = result(userInput, randomNumber);
        resultPrint(gameResults)

        const {strike} = gameResults;

        if(strike === 3){
          isPlaying = false;
          await restart(this);
        }
      }
      catch(error){
        throw new Error(error)
      }
    }
  }
}


export default App;
