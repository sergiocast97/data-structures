import { BTNode, BinaryTree } from './util/binaryTree';
import { LLNode, LinkedList } from './util/linkedList';

// Linked List
const x = new LLNode<string>('X');
const y = new LLNode<string>('Y');
const z = new LLNode<string>('Z');
x.next = y;
y.next = z;

const linkedList = new LinkedList(x);
linkedList.print();
linkedList.printReverse();

// Binary Tree
const a = new BTNode('A');
const b = new BTNode('B');
const c = new BTNode('C');
const d = new BTNode('D');
a.left = b;
b.left = c;
a.right = d;

const binaryTree = new BinaryTree(a);
binaryTree.print();
binaryTree.printBFS();
