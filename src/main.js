import match from './match.js';
import { pickUniqueNumbersInRange } from './pickNumbers.js';
import NUMBERS_LENGTH from './numbersLength.js';
import { 
  inputUserNumbers,
  inputNewGameSelection
}
from './inputUser.js';
import {    
  printEndGame, 
  printQuestionNewGame, 
  printMatchResult
} 
from './print.js';

const isAnswer = (strikeCount) => strikeCount === NUMBERS_LENGTH;

const playGame = async (computerNumbers) => {
    const userNumbers = await inputUserNumbers();
    const matchResult = match(computerNumbers, userNumbers);

    printMatchResult(matchResult); 

    if (!isAnswer(matchResult.strikeCount)) {
        await playGame(computerNumbers);
    }

    printEndGame();
};

const main = async () => {
    const computerNumbers = pickUniqueNumbersInRange();
    await playGame(computerNumbers);

    printQuestionNewGame();
    const newGameSelection = await inputNewGameSelection();

    if (newGameSelection) {
        await main();
    }
};

export default main;