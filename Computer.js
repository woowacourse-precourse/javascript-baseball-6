//상대방(컴퓨터) 임의의 수 3개 선택
const answer = [];
for (let n = 0; n <= 2; n += 1) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);
