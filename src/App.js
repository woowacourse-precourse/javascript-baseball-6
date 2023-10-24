import { compareNumbers } from './components/compareNumbers.js';

const checkButton = document.querySelector('#submit');
export let restartButton = document.querySelector('#game-restart-button');
checkButton.addEventListener('click', handleCheckButtonFunction);
restartButton.style.display = 'none';

function handleCheckButtonFunction(e) {
  e.preventDefault();
  compareNumbers();
}