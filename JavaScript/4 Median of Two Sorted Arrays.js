/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;
    const halfLen = Math.floor((m + n + 1) / 2);
    const INF = Number.POSITIVE_INFINITY;
    const NEG_INF = Number.NEGATIVE_INFINITY;

    while (low <= high) {
        const i = Math.floor((low + high) / 2); // partition in nums1
        const j = halfLen - i; // partition in nums2

        const maxLeftA = (i === 0) ? NEG_INF : nums1[i - 1];
        const minRightA = (i === m) ? INF : nums1[i];

        const maxLeftB = (j === 0) ? NEG_INF : nums2[j - 1];
        const minRightB = (j === n) ? INF : nums2[j];

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // Found correct partition
            if (((m + n) % 2) === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
            } else {
                return Math.max(maxLeftA, maxLeftB);
            }
        } else if (maxLeftA > minRightB) {
            // Move partition A to left
            high = i - 1;
        } else {
            // Move partition A to right
            low = i + 1;
        }
    }

    // Should not reach here if inputs are valid
    throw new Error('Input arrays not valid for median computation');
};

// Example test cases
console.log('Example 1:', findMedianSortedArrays([1,3], [2])); // 2.0
console.log('Example 2:', findMedianSortedArrays([1,2], [3,4])); // 2.5
console.log('Edge 1 (one empty):', findMedianSortedArrays([], [1])); // 1.0
console.log('Edge 2 (different sizes):', findMedianSortedArrays([1,3,8,9,15], [7,11,18,19])); // expected median
