var countries = {
  "香港": ["HK", 0],
  "日本": ["JP", 0],
  "台湾": ["Taiwan", 0],
  "美国": ["US", 0],
};

var airport = "Texon";

function operator(proxies) {
  proxies.map(res => {
    Object.keys(countries).forEach((elem, index) => {
      if (res.name.indexOf(elem) != -1) {
        countries[elem][1] += 1
        res.name = airport + ' '+countries[elem][0]+' ' + countries[elem][1];
      };
    });
})
return proxies
}
