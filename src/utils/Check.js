// 사용자 input 유효성 검사
export function checkInputValidity(input){
    // 1. 1-9로 이루어진 세자리 숫자인지 확인
    const INPUT_REGEX = /^[1-9]\d{2}$/
    if(!INPUT_REGEX.test(input)){
        throw new Error('[ERROR] 1-9로 이루어진 세자리 숫자가 아닙니다.')
    }

    // 2. 중복성 확인
    const inputArray = String(input).split('')
    if(new Set(inputArray).size !== inputArray.length){
        throw new Error('[ERROR] 중복된 숫자가 존재합니다.')
    }

    // 1&2번 조건 모두 통과시 return true
    return true
}