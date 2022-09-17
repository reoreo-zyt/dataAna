// 保护代理和虚拟代理
// 保护代理可以过滤一些需要代理的请求
// 虚拟代理把一些开销大的对象延迟到需要的时候再创建

// 预加载图片
// 先用 loading 图片占位，用异步的方式加载图片，加载好后将src链接填充到 img 节点里

// 立即执行函数，将要暴露的接口返回。（具有封装性，通过 myImage 无法修改属性方法，只能使用暴露的接口）
const myImage = (function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);

  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

myImage.setSrc(
  "http://110.40.253.20:5300/api/v1/image/43474b30524b40f37915c08e0b964edd"
);
