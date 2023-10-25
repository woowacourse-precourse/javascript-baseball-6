import { Spliter } from "./Spliter.js";

export const Validater = {
    validationCheck(number) {
        if (this.isNumber(number) === NaN) {
          throw new Error("[ERROR]");
        } else if (this.validationCountNumber(number) === false) {
          throw new Error("[ERROR]");
        } else if (this.validationSameNumber(number) === true) {
          throw new Error("[ERROR]");
        } else {
            return true;
        }
    },

    isNumber(number) {
        var parseNumber = parseInt(number);
        return parseNumber;
    },

    validationCountNumber(number) {
        const numberSplit = Spliter.splitNumber(number)
        if (numberSplit.length!== 3) {
            return false;
        }
        return true;
    },

    validationSameNumber(number) {
        const numberSplit = Spliter.splitNumber(number)
        let set = [...new Set(numberSplit)];
        if (numberSplit.length !== set.length) {
            return true;
        }
        return false;
    }
    
}