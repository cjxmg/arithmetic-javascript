/**
 * 计数排序
 *
 * 当数组中元素种类只有固定值时，便可计下每个值出现的次数，再从头填充数组
 *
 * 代码实现需要两次遍历数组 如果想一次遍历就完成的话 需要使用三路快速排序
 *
 * leetcode地址：https://leetcode-cn.com/problems/sort-colors/
 */

function countSort(nums) {
  const count = { 0: 0, 1: 0, 2: 0 }
  nums.forEach((num) => {
    count[num]++
  })
  let index = 0
  Object.keys(count).forEach((key) => {
    for (let i = 0; i < count[key]; i++) {
      nums[index++] = key
    }
  })
}

// ---------- 测试 ----------
const testArr = [2, 0, 2, 1, 1, 0]
countSort(testArr)
console.log(testArr)
