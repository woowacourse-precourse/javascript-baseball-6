
//answer 데이터 유효성 검사 함수
async function checkAnswerData(answer) {

    //길이가 3이 아닐때의 검사
    if(answer.length !== 3){
      throw new Error('[ERROR] 길이가 3이 아닙니다');
    }
    
    //answer이 숫자가 아닐때의 검사
    
    if(answer<100||answer>999) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    

    //answer에 중복된 값이 들어있을때의 검사
    const deleteDupAnswer = [...new Set(answer.split(''))];
    if(deleteDupAnswer.length !== answer.length) {
      throw new Error('[ERROR] 중복된 값이 포함되어 있습니다.');
    }

    return true;
}

export default checkAnswerData;
