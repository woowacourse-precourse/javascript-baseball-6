import { Random } from "@woowacourse/mission-utils";

export const createRandAnswer = () => {
  const answerSet = new Set();
    
  while(answerSet.size < 3){
    let num = Random.pickNumberInRange(1, 9);
    if(!answerSet.has(num)){
      answerSet.add(num);
    }
  }

  return [...answerSet].join('');
}