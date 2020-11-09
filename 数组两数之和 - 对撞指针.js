/**
 * 给定一个已按照升序排列的有序数组，找到两个数使得它们相加之和等于目标数。
 * 返回索引从1开始，且答案唯一
 *
 * 比如：输入 numbers = [2, 7, 11, 15], target = 9
 * 返回 [1,2]
 *
 * 思路：利用数组升序的特性，定义首尾两个指针，若首尾相加小于target，
 * 则首指针往后移一位，反之，后指针往前移一位，直至找到等于target的对应索引
 *
 * leetcode地址：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

function twoSum(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    if (nums[start] + nums[end] === target) {
      return [start + 1, end + 1]
    } else if (nums[start] + nums[end] > target) {
      end--
    } else {
      start++
    }
  }
}

// ---------- 测试 ----------
const testArr = [2, 7, 11, 15]
const res = twoSum(testArr, 9)
console.log(res)
