//플레이어 입력 값 출력

const tries = [];
function checkInput(input) {
if (input.length !== 3) {
    return alert('3자리 숫자를 입력해 주세요.');
    }
if (new Set(input).size !== 3) {
    return alert('중복되지 않게 입력해 주세요.');
    }
if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
    }
return true;
}