import { Random } from "@woowacourse/mission-utils";
class Enemy {
  constructor() {
    this.item = {};
  }

  get() {
    return this.item;
  }

  fill(arr) {
    arr.forEach((v, i) => {
      this.item[v] = i;
    });
  }

  setRandomNumber(){
    const computer = [];
    let num;
    while(computer.length !== 3) {
      num = Random.pickNumberInRange(1,9)
      if(!computer.includes(num)) computer.push(num);
    }
    this.fill(computer);
  }

  compare(p) {
    const ret = Array.from({length:3}).fill(0);
    p.forEach((v,i)=> {
      if(this.item[v] === undefined) ret[2]++;
      else {
        if(i === this.item[v]) ret[0]++;
        else ret[1]++;
      }
    });;
    return ret;
  }
}
export default Enemy;