import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

class OutputView {
  printPurchaseResult({ issueCnt, lottos }) {
    Console.print(MESSAGE.outputs.PURCHASE_AMOUNT(issueCnt));

    lottos.forEach((numbers) => {
      Console.print(MESSAGE.outputs.ISSUE_LOTTERY_TICKET(numbers));
    });
  }

  static printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
