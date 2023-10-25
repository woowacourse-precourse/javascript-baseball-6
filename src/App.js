class App {
  constructor() {
    this.restartButton = document.createElement('button');
    this.restartButton.textContent = '게임 재시작';
    this.restartButton.addEventListener('click', this.restartGame.bind(this));

    this.quitButton = document.createElement('button');
    this.quitButton.textContent = '게임 종료';
    this.quitButton.addEventListener('click', this.quitGame.bind(this));
  }

  async play() {
    const $input = document.querySelector('#input');
    const $form = document.querySelector('#form');
    const $logs = document.querySelector('#logs');

    const numbers = [];
    for (let n = 0; n < 9; n += 1) {
      numbers.push(n + 1);
    }

    const answer = [];
    for (let n = 0; n < 3; n += 1) {
      const index = Math.floor(Math.random() * numbers.length);
      answer.push(numbers[index]);
      numbers.splice(index, 1);
    }

    const tries = [];

    function checkInput(input) {
      if (input.length !== 3) {
        throw new Error('3자리 숫자를 입력해 주세요.');
      }
      if (new Set(input).size !== 3) {
        throw new Error('중복되지 않게 입력해 주세요.');
      }
      if (tries.includes(input)) {
        throw new Error('이미 시도한 값입니다.');
      }
      return true;
    }

    function defeated() {
      const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
      $logs.appendChild(message);
      $logs.appendChild(this.restartButton);
      $logs.appendChild(this.quitButton);
    }

    let out = 0;
    $form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = $input.value;
      $input.value = '';

      try {
        const valid = checkInput(value);
        if (!valid) return;

        if (answer.join('') === value) {
          $logs.textContent = '홈런!';
          $logs.appendChild(this.restartButton);
          $logs.appendChild(this.quitButton);
          return;
        }

        if (tries.length >= 9) {
          defeated();
          return;
        }

        let strike = 0;
        let ball = 0;

        for (let i = 0; i < answer.length; i++) {
          const index = value.indexOf(answer[i]);
          if (index > -1) {
            if (index === i) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }

        if (strike === 0 && ball === 0) {
          out++;
          $logs.append(`${value}: 낫싱`, document.createElement('br'));
        } else {
          $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
        }

        if (out === 3) {
          defeated();
        }

        tries.push(value);
      } catch (error) {
        $logs.textContent = error.message;
        defeated();
      }
    });
  }

  restartGame() {
    window.location.reload();
  }

  quitGame() {
    window.close();
  }
}

export default App;

