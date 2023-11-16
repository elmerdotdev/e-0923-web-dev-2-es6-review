// MAP ===============================
const numbersMap = [1, 2, 3, 4, 5]
let newNumbersMap = numbersMap.map(number => {
  return number * 2
})
console.log(newNumbersMap)

// FILTER ===============================
const numbersFilter = [1, 2, 3, 4, 5]
let newNumbersFilter = numbersFilter.filter(number => {
  if (number % 2 === 0) {
    return true
  }
})
console.log(newNumbersFilter)

// FOREACH ===============================
const numbersForeach = [1, 2, 3, 4, 5]
numbersForeach.forEach((item, index) => {
  console.log(item, index)
})

// REDUCE ===============================
const numbersReduce = [1, 2, 3, 4, 5]
let sum = numbersReduce.reduce((total, current) => {
  return total + current
}, 0)
console.log(sum)