import { playGame } from './components/playGame.js';
import { get } from './Utils.js';

class App {
  async play() {
    get('.result-state').innerText ='숫자 야구 게임을 시작합니다.'
    
    get('form').addEventListener('submit', (e) => {
      e.preventDefault();
      playGame(e)
    })
  }
}

const app = new App();
app.play();