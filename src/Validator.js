import GameMessage from "./GameMessage.js";

class Validator {

    isValidInput(userInput) {
        this.isNumber(userInput);
        this.checkLength3(userInput);
        this.isDuplicated(userInput);
        return true;
    }

    isNumber(userInput) {
        if (isNaN(userInput)) throw new Error(GameMessage.INVALID_USER_INPUT_NOT_NUMBER);
        return true
    }

    checkLength1(userInput) {
        if (isNaN(userInput) && userInput.length !== 1) throw new Error(GameMessage.INVALID_INPUT);
        return true
    }

    checkLength3(userInput) {
        if (userInput.length !== 3) {
            throw new Error(GameMessage.INVALID_USER_INPUT_LENGTH);
        }
        return true;
    }
    
    isDuplicated(userInput) {
        const set = new Set(userInput);
        const arr = [...set];
        if (arr.length !== 3) throw new Error(GameMessage.INVALID_USER_INPUT_DUPLICATE)
        return true
    }

}


export default Validator