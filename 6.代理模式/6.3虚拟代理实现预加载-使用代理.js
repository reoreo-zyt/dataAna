// 实际的照片显示功能
const myImage = (function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);

  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

// 引入代理对象
// !保证了单一职责原则
const proxyImage = (function () {
  const img = new Image();
  // 事件，在图片加载好之后就插入真正的图片
  // !不能用箭头函数，this 为 undefined
  img.onload = function () {
    myImage.setSrc(this.src);
  };

  return {
    setSrc: function (src) {
      // 在图片加载好之前先插入loading 图片
      myImage.setSrc(
        "https://img0.baidu.com/it/u=341397235,4161367802&fm=253&app=138&size=w931&n=0&f=GIF&fmt=auto?sec=1663174800&t=939e660570d197565db02ef12bc43707"
      );
      img.src = src;
    },
  };
})();

proxyImage.setSrc(
  "http://110.40.253.20:5300/api/v1/image/43474b30524b40f37915c08e0b964edd"
);
