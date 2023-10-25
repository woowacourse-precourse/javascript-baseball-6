import {Random} from '@woowacourse/mission-utils';

class ComputerNum {
  randomNum() {
    return Random.pickNumberInRange(1, 9);        
  }
  createComputerNum() {
    const RESULT = [];
    while (RESULT.length < 3) {
      const RANDOM_NUM = this.randomNum();
      if (!RESULT.includes(RANDOM_NUM)) {
        RESULT.push(RANDOM_NUM);  
      }
    }
    return RESULT.join('');
  }     
}

export default ComputerNum;