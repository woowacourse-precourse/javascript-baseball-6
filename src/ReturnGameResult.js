class ReturnGameResult {
  getStrikeBallCount(cpu, user) {
    return {
      strike: this.countStrike(cpu, user),
      ball: this.countBall(cpu, user),
    };
  }

  countStrike(cpu, user) {
    let strike = 0;
    for (let i = 0; i < cpu.length; i++) {
      if (cpu[i] === user[i]) {
        strike++;
      }
    }
    return strike;
  }

  countBall(cpu, user) {
    let ball = 0;
    let cpuSet = new Set(cpu);
    for (let i = 0; i < cpu.length; i++) {
      if (cpu[i] !== user[i] && cpuSet.has(user[i])) {
        ball++;
      }
    }
    return ball;
  }
}

export default ReturnGameResult;
