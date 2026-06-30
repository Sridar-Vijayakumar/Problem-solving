
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Find length and last node
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Reduce extra rotations
    k = k % length;
    if (k === 0) return head;

    // Make the list circular
    tail.next = head;

    // Find new tail
    let steps = length - k;
    let newTail = head;

    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }

    // New head
    let newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
};