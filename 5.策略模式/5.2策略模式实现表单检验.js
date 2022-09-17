// 封装检验逻辑为策略代理对象
const strategies = {
  isNonEmpty: function (value, errorMsg) {
    // 不为空
    if (value === "") {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    // 限制最小长度
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    // 手机号码格式
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
};

// Validator 类的实现
class Validator {
  constructor() {
    this.cache = []; // 保存校验规则
  }

  add(dom, rules) {
    const self = this;

    for (let i = 0, rule; (rule = rules[i]); i++) {
      const strategyAry = rule.strategy.split(":");
      const errorMsg = rule.errorMsg;

      self.cache.push(function () {
        const strategy = strategyAry.shift();
        strategyAry.unshift(dom.value);
        strategyAry.push(errorMsg);
        return strategies[strategy].apply(dom, strategyAry);
      });
    }
  }
  start() {
    // 遍历函数数组，直到函数为 undefined
    for (let i = 0, validatorFunc; (validatorFunc = this.cache[i]); i++) {
      const msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
      if (msg) {
        // 如果有确切的返回值，说明校验没有通过
        return msg;
      }
    }
  }
}
