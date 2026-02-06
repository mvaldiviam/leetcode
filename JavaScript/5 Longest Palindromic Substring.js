/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    let start = 0, end = 0;

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++;
        }
        return right - left - 1; // length of palindrome
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expand(i, i);     // odd-length center
        const len2 = expand(i, i + 1); // even-length center
        const len = Math.max(len1, len2);
        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};