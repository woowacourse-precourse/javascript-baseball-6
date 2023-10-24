// 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 생성
const computerNumbersArray = [];
while (computerNumbersArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbersArray.includes(number)) {
        computerNumbersArray.push(number);
    }
}
console.log(computerNumbersArray);


const result = document.querySelector('.result');


// 확인버튼 클릭했을 때 numArrayCompareEvent() 발생
function numArrayCompareEvent() {

    // 1. 유저의 입력 배열 userNumbersArray 생성
    // 사용자의 입력 값 배열 생성
    let userNum = document.querySelector('.userNum').value; 
    let userNumbersArray = userNum.toString().split('').map(Number);

    console.log(userNumbersArray);

    // 2. userNumbersArray의 유효성 검사

    // 2-1. 값이 세 자리가 아니라면?
    if (userNumbersArray.length!==3) {
        alert("[ERROR] 세 자리 숫자가 아닙니다.");
    } else {
        // 2-2. 중복된 숫자가 있다면?
        let isValid = true;
        let uniqueUserNumbersArray = new Set(userNumbersArray);
        // console.log(uniqueUserNumbersArray);
        // console.log(uniqueUserNumbersArray.size);
        // console.log(userNumbersArray.length);
        if (uniqueUserNumbersArray.size !== userNumbersArray.length) {
            alert("[ERROR] 중복된 값이 존재합니다.")
            isValid = false;
        }
        // 2-3. 지정된 숫자 범위를 넘어간다면?
        for (let i=0; i<3; i++) {
            if (userNumbersArray[i] < 1 || userNumbersArray[i] > 9) {
                alert("[ERROR] 1에서 9 사이의 범위를 벗어나는 숫자가 있습니다.");
                isValid = false;
                break;
            }
        }
        // 유효하다면!
        if (isValid) {
            // 3. computerNumbersArray와 userNumbersArray 비교  
            let strike = 0;
            let ball = 0;

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
}


// 결과가 '3스트라이크'가 아닐 경우 추가기능 구현
function addTry() {
    const newTry = document.createElement('div');
    newTry.className = 'try';

    const tryNumber = document.querySelectorAll(".try").length + 1;
    const nthTry = document.createElement('h3');
    nthTry.className = 'nth_try';
    nthTry.textContent = `${tryNumber}차 시도`;

    const input = document.createElement('input');
    input.className = 'userNum';

    const button = document.createElement('button');
    button.className = 'check';
    button.textContent = '확인';
    button.onclick = numArrayCompareEvent;

    const result = document.createElement('div');
    result.className = 'result';

    newTry.appendChild(nthTry);
    newTry.appendChild(input);
    newTry.appendChild(button);
    newTry.appendChild(result);

    document.querySelector("#container").appendChild(newTry);
}