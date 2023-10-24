function Comparison(com, user) {
    let length = com.length;
    let strike = 0;
    let ball = 0;
    for(let i=0; i<length; i++) {
        if((com[i]==user[i]) && (com.indexOf(i)== user.indexOf(i))){
            strike++;
        }
        else if(com.includes(user[i])){
            ball++;
        }
    }
    const result = {
        STRIKE : strike,
        BALL: ball,
    }
   return result;
}

class arrCompare {
    constructor(arrComputer, arrUser) {
        com = this.arrComputer;
        user = this.arrUser;
    }

    countForHint(){

    }
    resetCount(){
        strike = 0;
        ball = 0;
    }
}