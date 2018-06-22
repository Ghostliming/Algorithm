var assert = require('assert')
let Flower = {
  main () {
    console.time('用时')
    this.calc(100,9999)
    console.timeEnd('用时')
  },
  calc(m,n){
    assert(m>=100,'m必须大于100')
    assert(n>=m,'n必须大于m')
    assert(n<=9999,'n必须小于999')
    let arrs=new Array()
    for(var i = 0;i<10;i++){
      arrs.push(Math.pow(i,3))
    }
    for(m;m<=n;m++){
      let arr = String(m).split('')
      let total=arr.map((item)=>{
        return arrs[item]        
      }).reduce((a,b)=>{
        return a + b
      })
      if (total === m) {
        console.log(m)
      }
    }
  }
}
Flower.main()