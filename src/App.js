class App {
  async play() {
    let over=1;
    const MissionUtils = require("@woowacourse/mission-utils");
    const ans=[];
    while(ans.length<3){
        const num=MissionUtils.Random.pickNumberInRange(1,9);
        
        if(!ans.includes(num)){
            ans.push(num);
        }
    }
    while (over!=0){
        console.log(ans);
        let ball=0;
        let strike=0;
        let you=MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :");
        
        if(Number(you)<0 || Number(you)>999||you[0]==you[1]||you[1]==[2]||(you.length<3&&Number(you)!=1)){
            throw "[ERROR] 숫자가 잘못된 형식입니다.";
            break;
        }
        
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                if (ans[i]===Number(you[j]))
                    ball++;
                if(i===j){
                    ball--;
                    strike++;
                }
                
            }
        }
        if (strike==3){
            MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임종료");
            let choose=MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            if (Number(choose)===1)
                continue;
            else if (Number(choose)===2)
                over=0;
        }
        else if (strike>0 && ball>0)
            MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        else if (strike==0 && ball>0)
            MissionUtils.Console.print(`${ball}볼`);
        else if (ball==0 && strike>0)
            MissionUtils.Console.print(`${strike}스트라이크`);
        else if (ball==0 && strike==0)
            MissionUtils.Console.print('낫싱');
    }
  }
}

export default App;
