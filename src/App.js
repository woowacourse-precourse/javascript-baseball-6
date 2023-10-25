class App {
  constructor() {
    this.restartButton = document.createElement('button');
    this.restartButton.textContent = '게임 재시작';
    this.restartButton.addEventListener('click', this.restartGame.bind(this));

    this.quitButton = document.createElement('button');
    this.quitButton.textContent = '게임 종료';
    this.quitButton.addEventListener('click', this.quitGame.bind(this));
  }

  async playGame() {
    const inputElement = document.querySelector('#input');
    const formElement = document.querySelector('#form');
    const logsElement = document.querySelector('#logs');

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

    function gameDefeated() {
      const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
      logsElement.appendChild(message);
      logsElement.appendChild(this.restartButton);
      logsElement.appendChild(this.quitButton);
    }

    let out = 0;
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = inputElement.value;
      inputElement.value = '';

      try {
        const valid = checkInput(value);
        if (!valid) return;

        if (answer.join('') === value) {
          logsElement.textContent = '홈런!';
          logsElement.appendChild(this.restartButton);
          logsElement.appendChild(this.quitButton);
          return;
        }

        if (tries.length >= 9) {
          gameDefeated();
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
          logsElement.append(`${value}: 낫싱`, document.createElement('br'));
        } else {
          logsElement.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
        }

        if (out === 3) {
          gameDefeated();
        }

        tries.push(value);
      } catch (error) {
        logsElement.textContent = error.message;
        gameDefeated();
      }
    });
  }

  restartGame() {
    window.location.reload();
  }

  quitGame() {
    // 브라우저에서는 프로그램 종료를 처리할 수 없으므로 아무 동작을 하지 않음
  }
}

export default App;
