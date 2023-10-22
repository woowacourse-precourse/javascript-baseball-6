      this.answerNumbers = this.generateRandomNumbers(3);
      Console.print('숫자 야구 게임을 시작합니다.');
      const input = await Console.readLineAsync('input : ');
      Console.print('ouput : ' + input);
      Console.print(this.isInputValid(input));
      console.log(this.answerNumbers);
