type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
// 问题分析
// K 是联合类型 union, T 是接口类型 interface

// 解题思路：https://www.bilibili.com/video/BV1vY41187Tx/?spm_id_from=333.788
// 对比学习法：js 解题
function myPick(todo: any, keys: any) {
  const obj: any = {};
  keys.forEach((key: string) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
};

// 1. 返回一个对象
// 2. 遍历 foreach => in
// - [Mapped Types(映射类型)(https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
// 3. todo[key] 取值 => Indexed
// - [Indexed Access Types(索引类型)](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
// 4. 看看 key 在不在 todo 里面 => keyof + extends
// - keyof
// - extends(泛型约束)


