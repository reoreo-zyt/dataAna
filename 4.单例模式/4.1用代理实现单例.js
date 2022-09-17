class CreateDiv {
  constructor(html) {
    this.html = html;
    this.init();
  }
  init() {
    const div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
}

// 代理类
// 立即执行函数必须使用函数表达式（使用了匿名函数）
const ProxySingletonCreateDiv = (function () {
  let instance;
  // 闭包
  return function (html) {
    // 惰性单例，在需要的时候才创建对象实例。
    // 具体到实际开发可以是登录浮窗，只有点击了登录才创建实例。
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  };
})();

const a = new ProxySingletonCreateDiv("sven1");
const b = new ProxySingletonCreateDiv("sven2");
alert(a === b);

// 对于 ES module 而言，导出的是引用地址（js中模块就是一个单例）；
// 导出的成员为只读，不能修改；

// 单例模式的应用有：登陆弹出窗口