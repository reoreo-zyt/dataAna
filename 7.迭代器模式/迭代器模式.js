// 循环遍历聚合对象

// 分为内部迭代器和外部迭代器
// 内部迭代器在调用的时候非常方便，外界不用关心迭代器内部的实现

function each(ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    // 循环中每一步触发的回调函数
    // ! call apply
    callback.call(ary[i], i, ary[i]); // 把下标和元素当作参数传给 callback 函数
  }
}

each([1, 2, 3], (i, n) => console.log([i, n]));

function compare(ary1, ary2) {
  if (ary1.length !== ary2.length) {
    throw new Error("ary1 和 ary2 不相等");
  }
  each(ary1, function (i, n) {
    if (n !== ary2[i]) {
      throw new Error("ary1 和 ary2 不相等");
    }
  });
  console.log("ary1 和 ary2 相等");
}
compare([1, 2, 3], [1, 2, 4]); // throw new Error ( 'ary1 和 ary2 不相等' );

// 外部迭代器必须显式地请求迭代下一个元素。

// 迭代器模式是一种相对简单的模式，绝大多数语言都内置了迭代器。