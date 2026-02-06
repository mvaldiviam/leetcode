/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a hash map to store value -> index mapping
    const map = new Map();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach target
        const complement = target - nums[i];
        
        // Check if complement exists in the map
        if (map.has(complement)) {
            // Return the indices - complement's index and current index
            return [map.get(complement), i];
        }
        
        // Store current number and its index in the map
        map.set(nums[i], i);
    }
    
    // No solution found (shouldn't happen based on problem constraints)
    return [];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));          // Output: [0, 1]
