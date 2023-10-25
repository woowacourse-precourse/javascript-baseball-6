// 사용자 input 유효성 검사
export function checkInputValidity(input){
    if(input.length !== 3) return false
    
    if(isNaN(input)) return false

    if(input.includes('0')) return 0

    const inputArray = String(input).split('')
    if(new Set(inputArray).size !== inputArray.length){
        return false
    }

    return true
}

// 정답 일치 여부 확인
export function checkAnswer(player, computer){
    for(let i=0; i<player.length; i++){
        if(player[i] !== computer[i]) return false
    }
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
    player.forEach((num, i) => {
        if(computer.includes(num) && num!==computer[i]) ballCount += 1
    })
    return ballCount
}

// 재시작시 사용자 input 유효성 검사
export function checkRetryValidity(input){
    if(input === '1' || input === '2') return true
    return false
}