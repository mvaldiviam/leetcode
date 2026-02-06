/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Helper function to create a linked list from an array
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for easy visualization
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to simplify the logic
    // This helps avoid special cases for creating the first node
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    // Traverse both lists until both are exhausted and no carry remains
    while (l1 !== null || l2 !== null || carry > 0) {
        // Get values from current nodes (0 if node is null)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        // Calculate sum of both digits and the carry
        const sum = val1 + val2 + carry;
        
        // Calculate new carry and digit to store
        carry = Math.floor(sum / 10);
        const digit = sum % 10;
        
        // Create new node with the digit and append to result
        current.next = new ListNode(digit);
        current = current.next;
        
        // Move to next nodes in both lists
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    // Return the result list (skip the dummy node which was just a placeholder)
    return dummyHead.next;
};

// Test cases
console.log("Test Case 1:");
const l1_1 = createLinkedList([2, 4, 3]);
const l2_1 = createLinkedList([5, 6, 4]);
const result1 = addTwoNumbers(l1_1, l2_1);
console.log("Input: l1 = [2,4,3], l2 = [5,6,4]");
console.log("Output:", linkedListToArray(result1)); // [7,0,8]
console.log("Explanation: 342 + 465 = 807\n");

console.log("Test Case 2:");
const l1_2 = createLinkedList([0]);
const l2_2 = createLinkedList([0]);
const result2 = addTwoNumbers(l1_2, l2_2);
console.log("Input: l1 = [0], l2 = [0]");
console.log("Output:", linkedListToArray(result2)); // [0]\n

console.log("Test Case 3:");
const l1_3 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l2_3 = createLinkedList([9, 9, 9, 9]);
const result3 = addTwoNumbers(l1_3, l2_3);
console.log("Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]");
console.log("Output:", linkedListToArray(result3)); // [8,9,9,9,0,0,0,1]
console.log("Explanation: 9999999 + 9999 = 10009998\n");
