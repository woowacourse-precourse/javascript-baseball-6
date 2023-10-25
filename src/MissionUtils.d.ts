declare module '@woowacourse/mission-utils' {
  class Random {
    static pickNumberInRange(startInclusive: number, endExclusive: number): number;
  }

  class Console {
    static readLineAsync(query: string): Promise<string>;
    static print(message: string): void;
  }
}
