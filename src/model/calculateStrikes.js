export const calculateStrikes = (userNumber, computerNumber) => {
    let cntStrike = 0;
    for (let ni = 0; ni < 3; ni++) {
        if (userNumber[ni] === computerNumber[ni]) {
            cntStrike += 1;
        }
    }
    return cntStrike
}