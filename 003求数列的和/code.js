var assert = require('assert')
let Sum = {
  main(){
    console.time('用时')
    this.sum(1698,14)
    console.timeEnd('用时')
    console.time('用时2')
    console.log(this.sum2(1698,140))
    console.timeEnd('用时2')
  },
  sum(n,m){
    assert(n<10000, 'n值必须小于10000')
    assert(n>0, 'n值必须大于0')
    assert(m<1000, 'm值必须小于1000')
    let num = n
    let all = []
    all.push(n)
    for(var i=0;i<m-1;i++){
      let val = Math.sqrt(num)
      all.push(val)
      num = val
    }
    let total = all.reduce((a,b)=>{
      return a+b
    })
    console.log(parseFloat(total).toFixed(2))
    return total
  },
  sum2(n,m){ //递归
    assert(n<10000, 'n值必须小于10000')
    assert(n>0, 'n值必须大于0')
    assert(m<1000, 'm值必须小于1000')
    if(m>1) {
      return n + this.sum2(Math.sqrt(n),m-1)
    } else {
      return Math.sqrt(n)
    }
  }
}
Sum.main()