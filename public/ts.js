"use strict";
let re = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(re, "$2, $1");
console.log(newstr);

let myArray = ["value1", "value2", "value3"];
let myset = new Set(myArray);
console.log(myset); //变成了对象
console.log([...myset]);

// /*
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// */

// function getTarget(value, target) {
//   /*
//   第一种：
//   for (let i = 0; i < value.length; i++) {
//     for (let j = i + 1; j < value.length; j++) {
//       if (value[i] + value[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   */
//   /*
//   第二种：
//   let map = new Map();
//   for (let i in value) {
//     map.set(value[i], i);
//   }
//   for (let j = 0; j < value.length - 1; j++) {
//     console.log(map.get(target - value[j]), "map", target - value[j]);
//     //相减如果能在对象里面找到的，那么就返回当前的值，和能找到的值
//     if (map.has(target - value[j]) && map.get(target - value[j]) != j) {
//       return [j, +map.get(target - value[j])];
//     }
//   }
//   */
//   /*
//  第二种重复:
//   let obj = new Map();
//   for (let i in value) {
//     obj.set(value[i], i);
//   }
//   //对象，对象的值是健，健是指
//   for (let k = 0; k < value.length - 1; k++) {
//     //判断有这个键值对。有这个属性，并且获取的这个属性值不能能循环的一致
//     if (obj.has(target - value[k]) && obj.get(target - value[k]) != k) {
//       return [k, +obj.get(target - value[k])];
//     }
//   }
//  */

//   /*第三种：直接用对象
//    */
//   let obj = {};
//   for (let i = 0, len = value.length; i < len; i++) {
//     let mult = target - value[i];
//     if (mult in obj) {
//       return [obj[mult], i];
//     }
//     obj[value[i]] = i;
//   }

//   /*第四种:第四种有问题*/
//   // for (let i = 0, len = value.length; i < len; i++) {
//   //   if (value.indexOf(target - value[i + 1]) > -1) {
//   //     return [i, value.indexOf(target - value[i])];
//   //   }
//   // }
// }

// // console.log(getTarget([2, 7, 11, 15], 9));
// // console.log(getTarget([3, 2, 4], 6));

// /*

// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
// 返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
// 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分
// 。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
// 将最终结果插入 nums 的前 k 个位置后返回 k 。
// 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// */

// function duplicateRemoval(arr) {
//   let newarr = [...new Set(arr)];
//   return newarr;
// }

// // let obj = {
// //   birth: 0,
// //   getAge: function () {
// //     console.log(this, "this======");
// //     this.birth = 2;
// //     var fn = () => new Date().getFullYear() - this.birth;
// //     return fn();
// //   },
// // };
// // // let age = obj.getAge();
// // // console.log(age, "1");
// // var a = obj.getAge;
// // let b = a();
// // console.log(b, "查看this=undefined");


// // let color = "red";
// // let o = { color: "blue" };
// // let sayColor = () => {
// //   console.log(this.color);
// // };

// // console.log(sayColor());
// // o.sayColor = sayColor;
// // console.log(o.sayColor());

// // var arr = [1, 2, 3, 4, 5, 6];
// // arr.map((item) => {
// //   console.log(this, "arrthis");
// //   return item * 2;
// // });

// // let obj1 = new Object();
// // console.log(Object, "Object构造函数");

// // let objArrayof = {
// //   one: "one",
// //   two: "two",
// // };
// // let newObjArrayOf = Array.of(objArrayof);
// // console.log(newObjArrayOf, "newObjArryOf"); //会是一个数组

// // let newList = [1, 2, 3, 4, 5, 6, 7];
// // let newL = newList.splice(1, 1, "aa", "替换");
// // console.log(newL, "newLnewL", newList, "元数据");

// /*
// 总结如下 ：
//   涉及到的是 let var const
//   全局的let 不会挂在到window 上，var会挂在到window上,var是函数作用域和全局。而let是块级作用域
//   还有谁调用的问题 ，谁调用谁就是this

// */

// const thisUseStrictFn = () => {
//   console.log(this, "产看this");
// };
// thisUseStrictFn();

// let color = "red";
// let o = { color: "blue" };
// let sayColor = () => {
//   //window上是没有这些参数的。
//   console.log(this,'thisColor',o)
//   console.log(this.color);
// };
// console.log(sayColor());
// // o.sayColor = sayColor;//只是引用
// // console.log(o.sayColor());
// //全局里的指window

// let obj = {
//   birth: 0,
//   getAge: function () {
//     console.log(this, "this======");
//     this.birth = 2;
//     var fn = () => new Date().getFullYear() - this.birth;
//     return fn();
//   },
// };
// let age = obj.getAge();
// console.log(age, "1");
// var a = obj.getAge;
// let b = a();
// console.log(b, "查看this=undefined");

// /*要考虑是不是 全局的变量，要考虑是谁调用*/
//=========================================================================================================

// window.color = "red";
// let o = {
//   color: "blue",
// };
// function sayColor() {
//   console.log(this, "this");
//   /*严格模式下为什么是undefied
//   非严格模式下是 window
//   */
//   console.log(this.color);
// }
// sayColor(); //返回的是red
// o.sayColor = sayColor;
// o.sayColor(); //返回的是blue

/*箭头函数*/
window.color = "red";
let o = {
  color: "blue",
};

/*箭头函数，值得是箭头函数的上下文，此时这个箭头函数的上下文是 window*/
const sayColor = () => {
  console.log(this, "this");
  /*严格模式下为什么是undefied
  非严格模式下是 window
  */
  console.log(this.color);
};
sayColor(); //返回的是red
// o.sayColor = sayColor;
// o.sayColor(); //返回的是blue

// window.color = "red";

// let o = {
//   color: "blue",
//   /*箭头函数，值得是箭头函数的上下文，此时这个箭头函数的上下文是 window*/
//   sayColor: () => {
//     console.log(this, "this");
//     /*严格模式下为什么是undefied
//   非严格模式下是 window
//   */
//     console.log(this.color);
//   },
// };

// o.sayColor(); //返回的是red
// // let say = o.sayColor;
// // say(); //返回的是red
