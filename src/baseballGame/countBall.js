/**
 * 정답과 User Input을 비교하여 볼 카운트를 반환한다
 * strike에 해당되는 경우도 ball로 취급한다
 * 
 * @param {string} answer
 * @param {string} userInput
 * @returns {number}
 */
export default function countBall(answer, userInput) {
  let ballCount = 0;
  const answerList = answer.split("");

  for (let i = 0; i < answerList.length; i++) {
    if (userInput.includes(answerList[i])) {
      ballCount += 1;
    }
  }
  
  return ballCount;
}
