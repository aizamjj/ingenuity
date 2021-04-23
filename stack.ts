interface IStackNode<T> {
  item: T | null;
  next: IStackNode<T> | null;
}
interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private maxSize: number = Infinity) {
  }
  push(item: T): void {
    if (this.size() === this.maxSize) {
      throw Error('Stack has reached max capacity')
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  size(): number {
    return this.storage.length;
  }
  // returns the top of the stack
  peek() {
  }
  // return true if and only if the stack is empty
  isEmpty()
}


