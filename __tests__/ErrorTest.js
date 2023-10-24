import { ERROR_MESSAGE } from "../src/App";
import { mockQuestions, mockRandoms } from "./ApplicationTest";
import App from "../src/App";


describe("예외 테스트",  ()=>{

  
    test("예외 테스트 길이 체크", async () => {
      // given
      const randoms = [1, 3, 5];
      const answers = ["1234"];
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.LENGTH);
    });
  
  
  
    test('예외 테스트 입력값 숫자 확인', async() => { 
      //given
      const randoms = [1,3,5]
      const answers = ["r12"]
  
      mockRandoms(randoms);
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NUMBER);
  
     })
  
  
     test('예외 테스트 숫자 중복 입력 확인', async() => { 
      //given
      const randoms = [1,3,5]  
      const answers = ["112"]
      
      mockRandoms(randoms)
      mockQuestions(answers);
  
      // when & then
      const app = new App();
  
      await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE);
     });
    
     test("예외 테스트 재시작시 1,2 이외의 문자 입력", async ()=>{
        // given
        const answers = ["12"]
        mockQuestions(answers);

        // when & then
        const app = new App()
        await expect(app.restart()).rejects.toThrow(ERROR_MESSAGE.IS_RESTART);
     })

});