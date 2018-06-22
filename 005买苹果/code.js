timeendvar assert = require('assert')
let Apple = {
  main() {
    console.time('用时')
    this.buy(70)
    console.timeEnd('用时')
  },
  buy(num){
    assert(num>=1&&num<=100,'购买数量只能大于1并且小于100')
    let max = Math.ceil(num/6)
    let min = Math.ceil(num/8)
    for(min;min <= max;min++){
      for(var i = 1;i<=min;i++){
        if(i*6+(min-i)*8-num == 0){
          console.log('买%s袋6个装，买%s袋8个装，共计%s袋',i,min-i,min)
          return
        }
      }
    }
    console.log(-1)
  }
}

Apple.main()