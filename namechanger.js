// countries列表。"关键词": ["替换为", 0]
var countries = {
  "香港": ["HK", 0],
  "日本": ["JP", 0],
  "台湾": ["Taiwan", 0],
  "美国": ["US", 0],
  "韩国": ["Korea", 0],
  "土耳其": ["Turkey", 0],
  "巴基斯坦": ["Pakistan", 0],

};

// 其它
var others = {
  "专线": "zx",
};

var airport = "Texon";

function operator(proxies) {
  proxies.map(res => {
    var resultArray = [airport];
    Object.keys(countries).forEach((elem, index) => {
      if (res.name.indexOf(elem) != -1) {
        countries[elem][1] += 1;
        resultArray.push(countries[elem][0],countries[elem][1]);
        console.log(resultArray);
      };
    });
    Object.keys(others).forEach((elem, index) => {
      if (res.name.indexOf(elem) != -1) {
        resultArray.push(others[elem]);
      };
    });
    res.name = resultArray.join(' ');
})
return proxies
}
