const checkNum = (userNum) =>{
    if(userNum.length !== 3 ||
        userNum[0] === userNum[1] ||
        userNum[1] === userNum[2] ||
        userNum[0] === userNum[2]
    ){
        throw new Error();
    }
    
    return;
}

export default checkNum;