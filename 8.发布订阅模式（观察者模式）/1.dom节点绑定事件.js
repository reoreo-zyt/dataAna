// 订阅 document.body 上的 click 事件
document.body.addEventListener(
  "click",
  () => {
    console.log(2);
  },
  false
);

document.body.click(); // 模拟用户点击
