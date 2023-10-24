const { Random } = require("@woowacourse/mission-utils"); 

function computerRandomValue() { 
    const randomValueArr = Random.pickUniqueNumbersInRange(1, 9, 3);
    const computerRandomValue = randomValueArr.join("");
    return computerRandomValue;
}

module.exports.computerRandomValue = computerRandomValue;