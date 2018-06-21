let data = [
    {
        "country":"中国",
        "name":"CN",
        "gold":74,
        "silver":81,
        "copper":123
    },
    {
        "country":"澳大利亚",
        "name":"AU",
        "gold":74,
        "silver":89,
        "copper":100
    },
    {
        "country":"日本",
        "name":"JP",
        "gold":68,
        "silver":40,
        "copper":70
    },
    {
        "country":"新加坡",
        "name":"SG",
        "gold":74,
        "silver":81,
        "copper":123
    },
    {
        "country":"俄罗斯",
        "name":"RU",
        "gold":74,
        "silver":89,
        "copper":100
    }
]

let maxg=0,maxs=0,maxc=0;
for(var i in data){
  let item = data[i]
  if(item.gold>maxg){ //获取最大金牌数
    maxg = item.gold
  }
  if(item.silver>maxs){ //最大银牌数
    maxs = item.silver
  }
  if(item.copper>maxc){ //最大铜牌数
    maxc = item.copper
  }

  item.charAt = [] //取得国家字母的ansic码
  item.name.split('').forEach((char) => {
    item.charAt.push(fixNumber(200-char.toLowerCase().charCodeAt()),100)
  })
}
for(var i in data) {
  let item = data[i]
  item.values = []
  item.values.push(fixNumber(item.gold,maxg)) //金牌格式化
  item.values.push(fixNumber(item.silver,maxs)) //银牌牌格式化
  item.values.push(fixNumber(item.copper,maxc)) //铜牌牌格式化
  item.values = item.values.concat(item.charAt)
  item.real = parseInt(item.values.join(''))
}

data.sort((a,b)=>{ 
  return b.real-a.real
})

console.log("排名顺序为：")
data.map((item)=>{
  console.log(item.country)
})


//辅助工具，将指定数字修复为和目标数字位数相同
function fixNumber(num,to){
  // num 待修复数字
  // to 目标数字
  if(num>to){
    throw new Error('目标数字不是最大数字')
    return
  }
  var max = String(parseInt(to)).length
  var numlength = String(num).length
  let fill = new Array(max-numlength)
  fill.fill('0')
  fill.push(num)
  return fill.join("")
}