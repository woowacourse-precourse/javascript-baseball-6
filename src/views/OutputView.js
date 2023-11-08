import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

class OutputView {
  printPurchaseResult({ issueCnt, lottos }) {
    Console.print(MESSAGE.outputs.PURCHASE_AMOUNT(issueCnt));

    lottos.forEach((numbers) => {
      Console.print(MESSAGE.outputs.ISSUE_LOTTERY_TICKET(numbers));
    });

    Console.print(CONSTANTS.NEW_LINE);
  }

  printGameResult({ earningsRate, fullResults }) {
    Console.print(MESSAGE.outputs.STATISTICS);

    CONSTANTS.RANK.map((key) => {
      Console.print(MESSAGE.outputs[key](fullResults[key]));
    });
    Console.print(MESSAGE.outputs.EARNINGS_RATE(earningsRate));
  }
}

export default OutputView;
