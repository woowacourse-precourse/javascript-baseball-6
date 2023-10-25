const checkNum = (userNum) =>{
    if(!/^\d{3}$/.test(userNum) || !userNum.trim()){
        throw new Error();
    }
    return;
}

export default checkNum;