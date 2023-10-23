import * as readline from 'readline';

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    var input = 1;    
    while (input == 1) {
      input = await playGame();
    }
  }
}

async function playGame(number) {
  var number = setNumber();
  while (true) {
    let guess = await readGuess();
  }
}

function setNumber() {
  var number = [0,0,0];
  var pool = [1,2,3,4,5,6,7,8,9];
  var temp = rand(9);
  number[0] = pool[temp];
  pool.splice(temp, 1);

  temp = rand(8);
  number[1] = pool[temp];
  pool.splice(temp, 1);

  temp = rand(7);
  number[2] = pool[temp];

  return number;
}

function rand(max) {
  var temp = Math.random() * max;
  temp = Math.floor(temp);

  return temp;
}

function readGuess() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question('숫자를 입력해주세요 : ', input => {
      rl.close();
      resolve(input);
    }))
}

export default App;