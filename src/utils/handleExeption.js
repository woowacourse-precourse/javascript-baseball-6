import { Console } from '@woowacourse/mission-utils';

export const handleException = async (action) => {
  while (true) {
    try {
      await action();
      break;
    } catch (err) {
      Console.print(err.message);
    }
  }
};
