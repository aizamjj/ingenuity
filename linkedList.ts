// Singly LinkedList with Sentinel Nodes
// Empty list would contain two pointers, head and tail, that are sentinel nodes with head pointing to 
// tail.
interface INode<T> {
  value: T | null;
  next: INode<T> | null;
}

class LinkedListNode<T> implements INode<T> {
  value: T | null;
  next: INode<T> | null;
  constructor(value: T | null = null) {
    this.value = value;
    this.next = null;
  }
}

interface ILinkedList<T> {
  insertFirst(value: T): void;
  insertLast(value: T): void;
  removeFirst(): T | null;
  removeLast(): T | null;
  remove(value: T): T | null;
  contains(value: T): boolean;
  isEmpty(): boolean;
  getFirst(): T | null;
}
export class LinkedList<T> implements ILinkedList<T> {
  head: INode<T>;
  tail: INode<T>;

  constructor() {
    this.head = new LinkedListNode<T>();
    this.tail = new LinkedListNode<T>();
    this.head.next = this.tail;
  }

  isEmpty(): boolean {
    return this.head.next === this.tail;
  }

  // insert to the beginning of the list
  insertFirst(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  getFirst(): T | null {
    if (this.isEmpty()){
      throw new Error('It is empty')
    } 
    return this.head.next?.value;
  }

  insertLast(value: T): void {
    const newNode = new LinkedListNode<T>(value);
    // create pointer to find the node before the tail
    let cur: LinkedListNode<T> | null = this.head;

    while (cur?.next != this.tail) {
      cur = cur.next;
    }
    if (cur) {
      newNode.next = this.tail;
      cur.next = newNode;
    }
  }

  removeFirst(): T | null {
    if(this.isEmpty()) {
      throw new Error('List is empty')
    }
    let first: LinkedListNode<T> | null = this.head.next;
    
    if(first) {
      this.head.next = first.next;
      first.next = null;
    }
    return first?.value; 
  }
  removeLast(): T | null {
    if(this.isEmpty()) {
      throw new Error('List is empty');
    }
    let last: LinkedListNode<T> | null = this.head.next;

    while(last?.next?.next != this.tail) {
      last = last.next;
    }
    if(last) {
      last.next = this.tail;
    }
    return last?.value;
  }
  remove(item: T): T | null {
    if (this.isEmpty()) {
      throw new Error ('List is empty');
    }
    let nodeToBeRemoved: LinkedListNode<T> | null = null;
    // current pointer
    let cur: LinkedListNode<T> | null = this.head;

    while(cur?.next.value != item) {
      cur = cur.next;

    }
    if (cur.next) {
      nodeToBeRemoved = cur.next;
      cur.next = cur.next.next;
      nodeToBeRemoved.next = null;
    }
    return nodeToBeRemoved?.value ?? null;
  }
  contains(item: T): boolean {
    if (this.isEmpty()) {
      throw new Error('List is empty');
    }
    let cur: LinkedListNode<T> | null = this.head;
    while(cur?.next != this.tail) {
      if (cur?.next?.value === item) {
        return true;
      }
      cur = cur.next;
    }
    return false;
   }
}
  

    

