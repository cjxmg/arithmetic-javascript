/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0
 *
 * 利用滑动窗口思路 将时间复杂度降为O(n)
 *
 * leetcode地址：https://leetcode-cn.com/problems/minimum-size-subarray-sum/submissions/
 */

var minSubArrayLen = function (s, nums) {
  let res = nums.length + 1
  let l = 0,
    r = -1
  let sum = 0

  while (l < nums.length) {
    if (sum < s && r + 1 < nums.length) {
      sum += nums[++r]
    } else {
      sum -= nums[l++]
    }

    if (sum >= s) {
      res = Math.min(res, r - l + 1)
    }
  }

  return res === nums.length + 1 ? 0 : res
}

// ---------- 测试 ----------
const len = minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
console.log(len)
