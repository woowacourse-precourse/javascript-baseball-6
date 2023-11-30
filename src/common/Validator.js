import { ERROR } from "../static/Message.js";
import NUMBERS from "../static/Numbers.js";

class Validator{
    validateInputLength(number) {
        if(number.length !== NUMBERS.three) throw new Error(`${ERROR.invalidNumLength}`);
    }
    validateNaN(numbers){
        numbers.forEach(element => {
            if(isNaN(element)) throw new Error(`${ERROR.invalidNumberType}`);
        });
    }
    validateNumberRange(numbers) {
        numbers.forEach(element => {
            if(element < NUMBERS.numberRangeMin || element > NUMBERS.numberRangeMax) throw new Error(`${ERROR.invalidRange}`);
        });
    }
    validateExitInput(number) {
        // if(!(number === NUMBERS.exitNum || number === NUMBERS.continueNum)) 
        if(number !== NUMBERS.exitNum && number !== NUMBERS.continueNum) throw new Error(`${ERROR.invalidExit}`);
    }
    validateDuplicate(numbers) {
        if(numbers.length !== new Set(numbers).size) throw new Error(`${ERROR.duplicateInput}`);
    }
}
export default Validator;