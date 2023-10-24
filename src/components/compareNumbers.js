
import { createCPUNumbers } from './createCPUNumbers.js';
import { validateUserNumbers } from './validateUserNumbers.js';
import { restartButton } from '../index.js';

const CPUNumbers = createCPUNumbers();

export function compareNumbers() {
  let userNumbers = validateUserNumbers();

  let strike = 0;
  let ball = 0;

  if (!userNumbers) {
    return;
  } else {
    userNumbers.forEach((value, index) => {
      if (value === CPUNumbers[index]) strike++;
      else if (CPUNumbers.includes(value)) ball++;
    });
  }

  const resultMessage = document.querySelector('#result');
  if (strike === 0 && ball === 0) {
    resultMessage.innerText = '낫싱';
  } else if (strike > 0 && ball > 0) {
    resultMessage.innerText = `${ball}볼 ${strike}스트라이크`;
  } else if (ball > 0) {
    resultMessage.innerText = `${ball}볼`;
  } else if (strike > 0) {
    resultMessage.innerText = `${strike}스트라이크`;
  }

  if (strike === 3) {
    resultMessage.innerText = `🎉정답을 맞히셨습니다🎉

    게임을 새로 시작하시겠습니까?

    `;

    restartButton.style.display = 'block';
  }

  restartButton.addEventListener('click', () => location.reload());
}