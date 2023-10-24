class GameError extends Error {
  constructor(message) {
    super('[ERROR]' + message);
    this.name = 'GameError';
  }
}

export default GameError;
