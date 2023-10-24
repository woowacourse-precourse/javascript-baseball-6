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

// 정답 일치 여부 확인
export function checkAnswer(player, computer){
    if(player.length !== computer.length) return false

    player.forEach((num, i)=>{
        if(num !== computer[i]) return false
    })

    return true
}

// 스트라이크 개수 확인
export function checkStrike(player, computer){
    let strikeCount = 0
    player.forEach((num, i) => {
        if(num === computer[i]) strikeCount += 1
    })
    return strikeCount
}

// 볼 개수 확인
export function checkBall(player, computer, strikeCount){
    let ballCount = 0
    player.forEach((num) => {
        if(computer.includes(num)) ballCount += 1
    })

    return ballCount - strikeCount
}
