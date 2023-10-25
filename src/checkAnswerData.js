
//answer 데이터 유효성 검사 함수
async function checkAnswerData(answer) {

    //길이가 3이 아닐때의 검사
    if(answer.length !== 3){
      throw new Error('[ERROR] 길이가 3이 아닙니다');
    }
    
    //answer이 숫자가 아닐때의 검사
    for(let i in answer){
      if(answer[i].charCodeAt() < 48 || answer[i].charCodeAt() > 57) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
      }
    }

    //answer에 중복된 값이 들어있을때의 검사
    const deleteDupAnswer = [...new Set(answer.split(''))];
    if(deleteDupAnswer.length !== answer.length) {
      throw new Error('[ERROR] 중복된 값이 포함되어 있습니다.');
    }

    return true;
}

export default checkAnswerData;
