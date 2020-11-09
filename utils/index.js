// 数组元素互换
function swap(arr, i, j) {
  const temp = arr[i]

  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = {
  swap,
}
