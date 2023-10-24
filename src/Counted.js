class Counted {
    static countedStrike(playerInputNumber, computerPickNumber, i, j) {
        if (playerInputNumber[i] == computerPickNumber[j]) {
            if (i == j) {
                return 1;
            }
        }
        return 0;
    }

    static countedBall(playerInputNumber, computerPickNumber, i, j) {
        if (playerInputNumber[i] == computerPickNumber[j]) {
            if (i != j) {
                return 1;
            }
        }
        return 0;
    }
}

export default Counted;