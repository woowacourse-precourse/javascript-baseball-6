/**
 * 정답과 User Input을 비교하여 스트라이크 카운트를 반환한다
 * 
 * @param {string} answer
 * @param {string} userInput
 * @returns {number}
 */
export default function countStrike(answer, userInput) {
  let strikeCount = 0;

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === userInput[i]) {
      strikeCount++;
    }
  }

  return strikeCount;
}

// console.log(countStrike("123", "421"));
// console.log(countStrike("123", "123"));
// console.log(countStrike("123", "456"));
