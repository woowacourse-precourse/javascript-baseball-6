// ========== Gloval Variable ==========

const computerNumbersArray = [];    // 컴퓨터가 생성한 난수
let userNumbersArray = null         // 유저가 입력한 값 리스트
let times = 1                       // 현재 시도 횟수

// ========== Functions ==========

// 유저의 입력 배열 userNumbersArray 생성
function makeUserNumbersArray() {
    let userNumInputs = document.querySelectorAll(`.userNum_${times}`);
    let userNumbers = Array.from(userNumInputs, input => Number(input.value));
    userNumbersArray = userNumbers.toString().split('').map(Number);

    console.log(userNumbersArray);
}

// 입력된 숫자의 범위 체크
function rangeException() {
    let isValid = false;

    for (let i=0; i<3; i++) {
        if (userNumbersArray[i] < 1 || userNumbersArray[i] > 9) {
            isValid = true;
            break;
        }
    }

    return isValid
}

// 확인버튼 클릭했을 때 numArrayCompareEvent() 발생
function numArrayCompareEvent() {

    // userNumbersArray 생성
    makeUserNumbersArray();

    // userNumbersArray의 예외처리
    if (userNumbersArray.length!==3) {
        alert("[ERROR] 세 자리 숫자가 아닙니다.");
    } else if (new Set(userNumbersArray).size !== userNumbersArray.length) {
        alert("[ERROR] 중복된 값이 존재합니다.")
    } else if(rangeException()) {
        alert("[ERROR] 1에서 9 사이의 범위를 벗어나는 숫자가 있습니다.");
    } else {
        // userNumbersArray에 더이상 문제 없음
        // computerNumbersArray와 userNumbersArray 비교  
        let strike = 0;
        let ball = 0;
        const result = document.querySelector(`.result_${times}`);

        for (let i = 0; i < userNumbersArray.length; i++) {
            if (computerNumbersArray[i] === userNumbersArray[i]) {
                strike++;
            } else if (computerNumbersArray.includes(userNumbersArray[i])) {
                ball++;
            } 
        }
        if (strike === 3) {
            result.innerHTML = "3스트라이크🥇🥇🥇"+"<br>"+"3개의 숫자를 모두 맞히셨습니다!"+"<br>"+"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        } else {
            if (strike === 0 && ball === 0) {
                result.innerHTML = "낫싱";
            } else {
                result.innerHTML = `${strike}스트라이크 ${ball}볼`;
            }
            addTry();
        }
    }
}

// '3스트라이크'가 아닐 경우 추가기능 구현
function addTry() {
    // 시도 횟수 증가
    times += 1

    // form 생성
    const newTry = document.createElement('div');
    newTry.className = `try_${times}`;

    const nthTry = document.createElement('h3');
    nthTry.className = `nth_try_${times}`;
    nthTry.textContent = `${times}차 시도`;

    const input = document.createElement('input');
    input.className = `userNum_${times}`;

    const button = document.createElement('button');
    button.className = `check_${times}`;
    button.textContent = '확인';
    button.onclick = numArrayCompareEvent;

    const result = document.createElement('div');
    result.className = `result_${times}`;

    newTry.appendChild(nthTry);
    newTry.appendChild(input);
    newTry.appendChild(button);
    newTry.appendChild(result);

    document.querySelector("#container").appendChild(newTry);
}

// 프로그램의 시작 함수
function play() {
    while (computerNumbersArray.length < 3) {   // 퓨터의 서로 다른 세 자리 랜덤 값 배열 생성
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computerNumbersArray.includes(number)) {
            computerNumbersArray.push(number);
        }
    }
    console.log(computerNumbersArray);
}

// ========== Main Function ==========

window.onload = function() {
    play()
}

