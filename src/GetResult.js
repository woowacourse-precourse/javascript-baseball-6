const getResult = function getResultOfEachUserGuess (
    computer,
    user) {
   if((!computer)||(!user))throw new Error('[ERROR]');
    const RESULT=[];
    let strikes=0;
    let balls=0;
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(user[i]===computer[j]) {
                if(i===j)strikes++;
                else balls++;
            }

        }

    }

    RESULT.push(strikes);
    RESULT.push(balls);
    return RESULT;
}

export default getResult;
