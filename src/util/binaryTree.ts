class Node<T> {
  data: T;

  right: Node<T> | null;

  left: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  print() {
    console.log(this.data);
    if (this.left !== null) this.left.print();
    if (this.right !== null) this.right.print();
  }
}

class BinaryTree<T> {
  root: Node<T> | null;

  constructor(root: Node<T> | null = null) {
    this.root = root;
  }

  print() {
    this.root?.print();
  }

  printBFS() {
    if (!this.root) return;
    const queue: Node<T>[] = [this.root];
    while (queue.length > 0) {
      const current = queue.shift()!;
      console.log(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

export { Node as BTNode, BinaryTree };
