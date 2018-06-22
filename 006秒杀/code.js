let Sale = {
  store:9239,//库存
  success: [],
  fail: [],
  nums:100000, //模拟下单数
  cache:[],
  main() {
    console.time("用时")
    this.Store=this.store
    let orders = []
    for(var i = 1;i<=this.nums;i++){
      orders.push({
        id:i
      })
    }
    orders.map((item) => {
      this.queen(item)
    })
  },
  getStore(){ //异步获取库存
    let random = Math.random()*100
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.store)
      },random)
    })
  },
  dealOrder(order) { //异步处理订单、处理库存
    let random = Math.random()*100
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(!this.cache.includes(order.id)&&this.cache.length<this.Store){
          this.cache.push(order.id)
          this.store--
          resolve(true)
        } else {
          this.fail.push(order)
          reject(false)
        }
      },random)
    })
  },
  async order (order) {//下单
    let store = await this.getStore()
    if(store>0) {
      this.dealOrder(order).then(res => {
        this.success.push(order)
        this.Statistics(order)
      }).catch(err=>{
        this.Statistics(order)
      })
    } else {
      this.fail.push(order)
      console.log('心爱的商品已售罄。')
      this.Statistics(order)
    }
  },
  Statistics(order) {
    if(order.id == this.nums){
      console.log("正在生成数据统计：")
      setTimeout(()=>{
      console.log("库存量：%s",this.store)
      console.log("订单总量：%s",this.nums)
      console.log("成功数：%s",this.success.length)
      console.log("失败数量：%s",this.fail.length)
      console.timeEnd("用时")
      },1000)
    }
  },
  queen(order){
    this.order(order)
  },
  async test(){
    let store = await this.getStore()
    console.log(store)
  }
}
Sale.main()