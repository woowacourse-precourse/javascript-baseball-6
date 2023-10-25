import { MissionUtils } from '@woowacourse/mission-utils';

const CreateRandomNumber = () => {
  const COMPUTER_NUMBER = [];

  while (COMPUTER_NUMBER.length < 3) {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!COMPUTER_NUMBER.includes(RANDOM_NUMBER)) {
      COMPUTER_NUMBER.push(RANDOM_NUMBER);
    }
  }

  return COMPUTER_NUMBER.map(String);
};

export default CreateRandomNumber;
