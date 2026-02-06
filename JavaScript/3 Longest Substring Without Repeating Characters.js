/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastIndex = new Map();
    let maxLen = 0;
    let start = 0; // sliding window start index
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (lastIndex.has(ch) && lastIndex.get(ch) >= start) {
            // move start to one past the previous occurrence
            start = lastIndex.get(ch) + 1;
        }
        lastIndex.set(ch, i);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
};

// Test cases
console.log('Input: "abcabcbb" → Output:', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('Input: "bbbbb" → Output:', lengthOfLongestSubstring('bbbbb')); // 1
console.log('Input: "pwwkew" → Output:', lengthOfLongestSubstring('pwwkew')); // 3
console.log('Input: "" → Output:', lengthOfLongestSubstring('')); // 0
console.log('Input: "au" → Output:', lengthOfLongestSubstring('au')); // 2
