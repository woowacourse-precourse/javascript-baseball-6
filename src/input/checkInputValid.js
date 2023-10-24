/**
 * 주어진 입력이 숫자야구 규칙에 적합한지 검사한다
 * 
 * @param {string} userInput
 * @returns {boolean}
 */


export default function checkInputValid(userInput) {

  const checkLength = () => userInput.length === 3;
  const checkOverlap = () => new Set(userInput.split('')).size === 3;  
  const isNumber = () => userInput.match(/^[1-9]+$/g) !== null; // also check range 1~9

  const isValid = checkLength() && checkOverlap() && isNumber();
  
  return isValid;
}

/*
  test cases 
  console.log("\ncheckLengh");
  checkInputValid("234");


  console.log("\ncheckOverlap");
  checkInputValid("223");
  checkInputValid("222");

  console.log("\nisNumber");
  checkInputValid("2o3");
  checkInputValid("2303");
  checkInputValid("23o3");
  checkInputValid("23o4");
  checkInputValid("1234");
*/