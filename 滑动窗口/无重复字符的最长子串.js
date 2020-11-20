/**
 * 无重复字符的最长子串
 *
 * 给定一个字符串，找出其中不含有重复字符的 最长子串 的长度
 *
 * leetcode地址：https://leetcode-cn.com/problems/sort-colors/
 */

function lengthOfLongestSubstring(s) {
  let record = {}
  let l = 0
  let r = -1
  let res = 0
  while (l < s.length) {
    if (r + 1 < s.length && !record[s[r + 1]]) {
      record[s[++r]] = 1
    } else {
      record[s[l++]]--
    }
    res = Math.max(res, r - l + 1)
  }
  return res
}

// ---------- 测试 ----------
const str = lengthOfLongestSubstring('abcabcbb')
console.log(str)
