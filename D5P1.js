var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(node) {
            this.heap.push(node);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.heap.length === 0) return null;

            const min = this.heap[0];
            const end = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.bubbleDown(0);
            }

            return min;
        }

        bubbleUp(index) {
            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);

                if (this.heap[parent].val <= this.heap[index].val) {
                    break;
                }

                [this.heap[parent], this.heap[index]] =
                    [this.heap[index], this.heap[parent]];

                index = parent;
            }
        }

        bubbleDown(index) {
            const length = this.heap.length;

            while (true) {
                let smallest = index;
                let left = 2 * index + 1;
                let right = 2 * index + 2;

                if (
                    left < length &&
                    this.heap[left].val < this.heap[smallest].val
                ) {
                    smallest = left;
                }

                if (
                    right < length &&
                    this.heap[right].val < this.heap[smallest].val
                ) {
                    smallest = right;
                }

                if (smallest === index) break;

                [this.heap[index], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[index]];

                index = smallest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();

    for (const list of lists) {
        if (list) heap.push(list);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (heap.size() > 0) {
        const node = heap.pop();

        current.next = node;
        current = current.next;

        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;
};