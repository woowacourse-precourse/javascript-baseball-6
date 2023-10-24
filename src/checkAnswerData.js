
//answer 데이터 유효성 검사 함수
async function checkAnswerData(answer){

    //길이가 3이 아닐때의 검사
    if(answer.length !== 3){
      return false;
    }
    
    //answer이 숫자가 아닐때의 검사
    for(let i in answer){
      if(answer[i].charCodeAt() < 48 || answer[i].charCodeAt() > 57){
        return false;
      }
    }

    //answer에 중복된 값이 들어있을때의 검사
    const deleteDupAnswer = [...new Set(answer.split(''))];
    if(deleteDupAnswer.length !== answer.length){
      return false;
    }

    return true;
}

export default checkAnswerData;
