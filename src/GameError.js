class GameError extends Error {
  constructor(message) {
    super('[Error] ' + message);
    this.name = 'GameError';
  }
}

export default GameError;
