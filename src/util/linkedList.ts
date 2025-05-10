/**
 * Linked List Node
 */
class Node<T> {
  data: T;

  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  /**
   * Recursive orderly print
   */
  print() {
    console.log(this.data);
    if (this.next !== null) this.next.print();
  }

  /**
   * Recursive reverse print
   */
  printReverse() {
    if (this.next !== null) this.next.printReverse();
    console.log(this.data);
  }
}

/**
 * Singly Linked List
 */
class LinkedList<T> {
  head: Node<T> | null;

  constructor(head: Node<T> | null = null) {
    this.head = head;
  }

  /**
   * Recursive orderly print
   */
  print() {
    this.head?.print();
  }

  /**
   * Recursive reverse print
   */
  printReverse() {
    this.head?.printReverse();
  }

  /**
   * Add a Node to the end of the list
   * @param data Data to be in node
   */
  append(data: T) {
    const newNode = new Node(data);
    if (this.head === null) this.head = newNode;
    else {
      let current = this.head;
      while (current.next !== null) current = current.next;
      current.next = newNode;
    }
  }

  /**
   * Add a Node to the Start of the list
   * @param data Data to be in node
   */
  prepend(data: T) {
    const newNode = new Node(data);
    if (this.head === null) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Get the size of the Linked List
   * @returns Linked List size
   */
  size(): number {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  /**
   * Checks whether LL is empty
   * @returns Boolean for empty state
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Checks if data is present in LL
   * @param data Data to compare
   * @returns Boolean if item has been found
   */
  contains(data: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  /**
   *
   * @param data
   * @returns
   */
  find(data: T): Node<T> | null {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }

  remove(data: T) {
    let current = this.head;
    while (current !== null) {
      if (current.next?.data === data) {
        current.next = current.next?.next ?? null;
      }
      current = current.next;
    }
    return null;
  }

  //removeAt(index: number) {}

  //getAt(index: number) {}

  toArray() {
    let array: T[] = [];
    let current: Node<T> | null = this.head;
    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  clear() {}

  reverse() {}

  getHead() {}

  getTail() {}
}

export { Node as LLNode, LinkedList };
