import match from './match.js';
import { pickUniqueNumbersInRange } from './pickNumbers.js';
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

const isAnswer = (strikeCount, fixedLength) => {
    return strikeCount === fixedLength;
};

const playGame = async (computerNumbers, fixedLength) => {
    const userNumbers = await inputUserNumbers(fixedLength);
    const matchResult = match(computerNumbers, userNumbers);
    printMatchResult({ ...matchResult }); 

    if (!isAnswer(matchResult.strikeCount, fixedLength)) {
        await playGame(computerNumbers, fixedLength);
    }
    printEndGame();
};

const main = async (fixedLength) => {
    const computerNumbers = pickUniqueNumbersInRange(fixedLength);
    await playGame(computerNumbers, fixedLength);

    printQuestionNewGame();
    if (await inputNewGameSelection()) {
        await main(fixedLength);
    }
};

export default main;