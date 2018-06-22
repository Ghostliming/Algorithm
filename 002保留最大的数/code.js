var assert = require('assert')
let Bar = {
  main(){
    // this.deal(456934145,4)
    console.time('用时')
    this.deal2(456934145,4)
    console.timeEnd('用时')
  },
  deal (number, cnt) { //连续去除
    let len = String(number).length
    assert(len>=1 || len<=50000, 'number值不符合要求')
    assert(cnt>0,'cnt必须是大于0的数')
    assert(/^[1-9]\d*$/.test(cnt),'cnt必须是整数')
    assert(cnt<len,'cnt必须小于number的长度')
    let max = 0

    for (let i=0;i<=len-cnt;i++){
      let narr = String(number).split('')
      narr.splice(i,cnt)
      // console.log(narr) 
      let maxval = parseInt(narr.join(''))
      if (maxval>max) {
        max = maxval
      }
    }
    console.log('输入number:%s,cnt:%s',number,cnt)
    console.log(max)
    return max
  },
  deal2(number,cnt){ //分散处理
    let len = String(number).length
    assert(len>=1 || len<=50000, 'number值不符合要求')
    assert(cnt>0,'cnt必须是大于0的数')
    assert(/^[1-9]\d*$/.test(cnt),'cnt必须是整数')
    assert(cnt<len,'cnt必须小于number的长度')
    var narr = String(number).split('')
    var maxN = number
    for(var i=0;i<cnt;i++){
      maxN = this.deal(maxN,1)
    }
    console.log(maxN)
    return maxN
  }
}
Bar.main()