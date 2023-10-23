// 컴퓨터의 서로 다른 세 자리 랜덤 값 배열 생성
const computerNumbersArray = [];
while (computerNumbersArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumbersArray.includes(number)) {
        computerNumbersArray.push(number);
    }
}
console.log(computerNumbersArray);

// 확인버튼 클릭했을 때 numArrayCompareEvent() 발생
function numArrayCompareEvent() {

    // 1. 유저의 입력 배열 userNumbersArray 생성
    // 사용자의 입력 값 배열 생성
    var userNum = document.querySelector('.userNum').value; 
    var userNumbersArray = userNum.toString().split('').map(Number);

    console.log(userNumbersArray);

    // 2. userNumbersArray의 유효성 검사
    // 값이 세 자리가 아니라면?
    if (userNumbersArray.length!==3) {
        alert("[ERROR] 세 자리 숫자가 아닙니다.");
    } else {
        var isValid = true;
        var uniqueUserNumbersArray = new Set(userNumbersArray);
        console.log(uniqueUserNumbersArray);
        console.log(uniqueUserNumbersArray.size);
        console.log(userNumbersArray.length);
        if (uniqueUserNumbersArray.size !== userNumbersArray.length) {
            alert("[ERROR] 중복된 값이 존재합니다.")
            isValid = false;
        }
        for (var i=0; i<3; i++) {
            if (userNumbersArray[i] < 1 || userNumbersArray[i] > 9) {
                alert("[ERROR] 1에서 9 사이의 범위를 벗어나는 숫자가 있습니다.");
                isValid = false;
                break;
            }
        }
        if (isValid) {
            // 3. computerNumbersArray와 userNumbersArray 비교
            console.log('이제 시작이다')
        }
    }
}