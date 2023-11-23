class CheckNumber{
    checkNumber(inputNum,randomNum) {
        let score = [0,0];
        for(let i=0;i<3;i++){
            if(inputNum[i]===randomNum[i]) score[0]+=1;
            else if(randomNum.includes(inputNum[i])) score[1]+=1;
        }
        return score;
    }
}
export default CheckNumber;