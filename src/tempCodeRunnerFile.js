function getRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
}

console.log(getRandomNumber());
module.exports = getRandomNumber;
