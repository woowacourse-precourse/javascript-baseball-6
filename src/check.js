function check(playerInputNumber) {
    const set = new Set(playerInputNumber);
    if (playerInputNumber.length != 3 || set.size != 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    for (let i = 0; i < playerInputNumber.length; i++) {
        if (isNaN(playerInputNumber[i])) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }
}

export default check;