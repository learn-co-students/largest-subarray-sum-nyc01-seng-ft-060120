// Naive solution 
// function largestSubarraySum(array) {
//     let max = 0; 
//     for (let start = 0; start < array.length; start++) {
//         for (let end = start; end < array.length + 1; end++) {
//             let subarray = array.slice(start, end) 
//             let sum = subarray.reduce((memo, item) => memo + item, 0)
//             max = Math.max(max, sum) 
//         }
//     }
//     return max 
// }

// Fast solution 
function largestSubarraySum(array) {
    let sum = 0
    let max = 0

    array.forEach(value => {
        if (sum + value < 0) {
            sum = 0 
        }
        else {
            sum += value 
            if (sum > max) {
                max = sum 
            }
        }
    })
    return max 
}
console.log('Largest sub array sum: ', largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4])) 