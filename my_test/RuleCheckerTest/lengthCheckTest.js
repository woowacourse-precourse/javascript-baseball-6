import RuleChecker from '../../src/RuleChecker.js';
import { Console } from '@woowacourse/mission-utils';

try {
    const i = await Console.readLineAsync('');
    RuleChecker.lengthCheck(i);
}
catch(error) {
    console.log(error);
}


