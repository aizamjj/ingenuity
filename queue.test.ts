import { Queue } from './queue'
import { Stack } from './stack'

describe('stack', function() {
  const stack = new Stack()
    beforeEach(function() {
    });

    describe('stack shared behavior', function() {

      it('reports a size of zero for a new stack', function() {
        expect(stack.size()).toBe(0);
      });

      it('reports a size of 2 after adding two items', function() {
        stack.push('a');
        stack.push('b');
        expect(stack.size()).toBe(2);
      });

      it('does not error when removing from an empty stack', function() {
        expect(function() { stack.pop(); }).toThrow();
      });

      it('reports a size of 1 after adding two items and removing one', function() {
        stack.push('a');
        stack.push('b');
        stack.pop();
        expect(stack.size()).toBe(1);
      });

      it('reports a size of 0 after removing more items than were added', function() {
        stack.push('a');
        stack.pop();
        stack.pop();
        expect(stack.size()).toBe(0);
      });

      it('allows sequentially additing and removing items', function() {
        stack.push('a');
        expect(stack.pop()).toBe('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
      });

    });

    describe('stack-specific behavior', function() {
      it('removes the most recently added of two items', function() {
        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
      });

      it('removes the newest item, after newer items have already been added and removed', function() {
        stack.push('a');
        stack.push('b');
        stack.push('c');
        stack.pop();
        expect(stack.pop()).toBe('b');
      });
    });

  });

  describe('queue', function() {
    const queue = new Queue();
    beforeEach(() => {
    });

    describe('queue shared behavior', function() {

      it('reports a size of zero for a new queue', function() {
        expect(queue.size()).toBe(0);
      });

      it('reports a size of 2 after adding two items', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.size()).toBe(2);
      });

      it('does not error when removing from an empty queue', function() {
        expect(function() { queue.dequeue(); }).toThrow();
      });

      it('reports a size of 1 after adding two items and removing one', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        expect(queue.size()).toBe(1);
      });

      it('reports a size of 0 after removing more items than were added', function() {
        queue.enqueue('a');
        queue.dequeue();
        queue.dequeue();
        expect(queue.size()).toBe(0);
      });

      it('allows sequentially adding and removing items', function() {
        queue.enqueue('a');
        expect(queue.dequeue()).toBe('a');
        queue.enqueue('b');
        expect(queue.dequeue()).toBe('b');
      });

    });

    describe('queue-specific behavior', function() {
      it('removes the least recently added of two items', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        expect(queue.dequeue()).toBe('a');
      });

      it('removes the oldest item, after newer items have already been added and removed', function() {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.dequeue();
        queue.enqueue('c');
        expect(queue.dequeue()).toBe('b');
      });
    });

  });

