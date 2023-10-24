import { Random } from '@woowacourse/mission-utils';

export default async function generateRandomNum() {
  const COMPUTER_GENERATED_NUM = [];

  while (COMPUTER_GENERATED_NUM.length < 3) {
    const RANDOM_SINGLE_NUM = Random.pickNumberInRange(1, 9);
    
    if (!COMPUTER_GENERATED_NUM.includes(RANDOM_SINGLE_NUM)) {
      COMPUTER_GENERATED_NUM.push(RANDOM_SINGLE_NUM);
    }
  }

  return COMPUTER_GENERATED_NUM.join();
}