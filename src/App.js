class App {
  constructor() {
    this.RESTART_BUTTON = document.createElement('button');
    this.RESTART_BUTTON.textContent = '게임 재시작';
    this.RESTART_BUTTON.addEventListener('click', this.restartGame.bind(this));

    this.QUIT_BUTTON = document.createElement('button');
    this.QUIT_BUTTON.textContent = '게임 종료';
    this.QUIT_BUTTON.addEventListener('click', this.quitGame.bind(this));
  }

  async play() {
    const $input = document.querySelector('#input');
    const $form = document.querySelector('#form');
    const $logs = document.querySelector('#logs');

    const numbers = [];
    for (let n = 0; n < 9; n += 1) {
      numbers.push(n + 1);
    }

    const ANSWER = [];
    for (let n = 0; n < 3; n += 1) {
      const index = Math.floor(Math.random() * numbers.length);
      ANSWER.push(numbers[index]);
      numbers.splice(index, 1);
    }

    const TRIES = [];

    function checkInput(input) {
      if (input.length !== 3) {
        throw new Error('3자리 숫자를 입력해 주세요.');
      }
      if (new Set(input).size !== 3) {
        throw new Error('중복되지 않게 입력해 주세요.');
      }
      if (TRIES.includes(input)) {
        throw new Error('이미 시도한 값입니다.');
      }
      return true;
    }

    function defeated() {
      const message = document.createTextNode(`패배! 정답은 ${ANSWER.join('')}`);
      $logs.appendChild(message);
      $logs.appendChild(this.RESTART_BUTTON);
      $logs.appendChild(this.QUIT_BUTTON);
    }

    let out = 0;
    $form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = $input.value;
      $input.value = '';

      try {
        const valid = checkInput(value);
        if (!valid) return;

        if (ANSWER.join('') === value) {
          $logs.textContent = '홈런!';
          $logs.appendChild(this.RESTART_BUTTON);
          $logs.appendChild(this.QUIT_BUTTON);
          return;
        }

        if (TRIES.length >= 9) {
          defeated();
          return;
        }

        let strike = 0;
        let ball = 0;

        for (let i = 0; i < ANSWER.length; i++) {
          const index = value.indexOf(ANSWER[i]);
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

        TRIES.push(value);
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
