const Random = require('@woowacourse/mission-utils');

function getRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
}
module.exports = getRandomNumber;
