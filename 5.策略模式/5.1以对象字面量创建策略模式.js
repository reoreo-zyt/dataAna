// 以绩效计算为例
const strategies = {
  // 函数也是对象
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;
  },
};

const calcBonus = (level, salary) => strategies[level](salary);

console.log(calcBonus("S", 8000)); // 32000