import { getResultFromScore } from "./GetResultFromScore";

/**
* 사용자 입력값과 컴퓨터 값을 계산하여 결과를 반환하는 함수
* @param {string} userInput 
* @param {number[]} computerNumbers 
* @returns {string}
*/
export const calculateResult = (userInput, computerNumbers) => {
 let strikes = 0;
 let balls = 0;

 const userInputList = userInput.split("").map(e => parseInt(e));

 userInputList.forEach((userNum, i) => {
   if (userNum == computerNumbers[i]) {
     strikes++;
     return;
   }
   if (computerNumbers.includes(userNum)) {
     balls++;
     return;
   }
 })

 return getResultFromScore(strikes, balls)
}