 class Queue<T> {
  private storage: T;
  private readonly maxSize: number;

  public constructor(maxSize: number) {

    // create storage container object for the unique values of each object instance
    this.storage = {};
    // create a head variable and set to 0
    this.head = 0;
    // create a tail variable and set to 0
    this.tail = 0;

  }
  // create an object for all the methods to be stored in that is shareable across all instances
  enqueue (value) {
    // set the new value at tail within the storage and increment
    this.storage[this.tail ++] = value;
  }
  dequeue () {
    // check if the queue is empty first
    if (this.size <= 0) throw  new Error('Queue is empty')
    // access the current head
    const result = this.storage[this.head];
    delete this.storage[this.head];
    this.head < this.tail && this.head++;
    return result;
  }

  size () {
    return this.tail - this.head;
  }
}
