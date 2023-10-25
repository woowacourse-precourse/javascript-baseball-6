import MESSEAGE from "./Constants.js";

class Exception {
  static isNumber(input) {
    return !isNaN(input) ? true : false;
  }
    
  static isThreeDigits(input) {
    return String(input).length === 3 ? true : false;
  }
  
  static isNonExistZero(input) {
    return this.makeArray(input).every((element) => element !== "0") ? true : false;
  }
  
  static isNonDuplicate(input) {
    const array = this.makeArray(input);
    const uniqueArray = this.makeUniqueArray(array);
    return array.length === uniqueArray.length ? true : false;
  }
  
  static makeArray(input) {
    return String(input).split("");
  }
  
  static makeUniqueArray(array) {
    return array.filter((element, index) => array.indexOf(element) === index);
  }
  
  static isNonException(input) {
    return this.isNumber(input) && this.isThreeDigits(input) && this.isNonExistZero(input) && this.isNonDuplicate(input) ? true : false;
  }

  static isExceptionChoice(input) {
    return input !== MESSEAGE.RESTART && input !== MESSEAGE.EXIT ? true : false;
  }
}
  
export default Exception