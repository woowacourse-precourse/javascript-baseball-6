import RuleChecker from '../../src/RuleChecker.js';
import { Console } from '@woowacourse/mission-utils';

try {
    const ruleChecker = new RuleChecker();
    const i = await Console.readLineAsync('');
    ruleChecker.isNumberCheck([...i]);
}
catch(error) {
    console.log(error);
}
