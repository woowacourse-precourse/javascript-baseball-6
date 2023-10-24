const { ERROR } = require("../constants");

function handlingInputExceptions(userValue) { //사용자 값 조건에 맞는지 확인
    if (userValue.length !== 3) throw new Error(ERROR.INPUT_ERROR);
    if (userValue.split("").some((value) => value < "0" || value > "9")) throw new Error(ERROR.INPUT_ERROR);
    if (userValue.split("").some((value) => value.repeat(3) == userValue || userValue.includes(value.repeat(2)))) throw new Error(ERROR.INPUT_ERROR);
    if (isNaN(userValue)) throw new Error(ERROR.INPUT_ERROR);
    return; 
}

module.exports.handlingInputExceptions = handlingInputExceptions;