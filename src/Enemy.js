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