/**
 * 三路排序
 *
 * 数组只有3种数据 从两端开始 依次把左端与右端的数据通过交换的方式摆放至正确的位置
 *
 * leetcode地址：https://leetcode-cn.com/problems/sort-colors/
 */

const { swap } = require('../utils')

function threeQuickSort(nums) {
  let zero = -1 // 指定0的索引
  let two = nums.length // 指定2的索引

  for (let i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      swap(nums, i, --two)
    } else {
      swap(nums, ++zero, i++)
    }
  }
}

// ---------- 测试 ----------
const testArr = [2, 0, 2, 1, 1, 0]
threeQuickSort(testArr)
console.log(testArr)
