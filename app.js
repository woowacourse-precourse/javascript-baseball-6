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
    // 값이 세 자리가 아니라면?
    if (userNumbersArray.length!==3) {
        alert("[ERROR] 세 자리 숫자가 아닙니다.");
    } else {
        let isValid = true;
        let uniqueUserNumbersArray = new Set(userNumbersArray);
        // console.log(uniqueUserNumbersArray);
        // console.log(uniqueUserNumbersArray.size);
        // console.log(userNumbersArray.length);
        if (uniqueUserNumbersArray.size !== userNumbersArray.length) {
            alert("[ERROR] 중복된 값이 존재합니다.")
            isValid = false;
        }
        for (let i=0; i<3; i++) {
            if (userNumbersArray[i] < 1 || userNumbersArray[i] > 9) {
                alert("[ERROR] 1에서 9 사이의 범위를 벗어나는 숫자가 있습니다.");
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log('이제 시작이다')

            // 3. computerNumbersArray와 userNumbersArray 비교  

        }
    }
}
