import TreeTraversal from './tree-traversal.interface';

/**
 * A generic tree implementation with children and a parent
 *
 * @version 0.1.0
 * @todo iterable - breadth, ...
 * @todo arraymap function
 * @todo map function
 * @todo verificar ciclos
 */
export class Tree<T> implements TreeTraversal<T> {
  private _parent: Tree<T>;
  private son: Tree<T>;
  private next: Tree<T>;

  constructor(private _data?: T) {
    this._parent = this.son = this.next = null;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  /**
   * Iterator in preorder manner
   */
  *preorder() {
    throw new Error('Not implemented');
  }

  /**
   * Iterator in posorder manner
   */
  *posorder() {
    throw new Error('Not implemented');
  }

  /**
   * Iterator in inorder manner
   */
  *inorder() {
    throw new Error('Not implemented');
  }

  /**
   * 
   */
  *reverseInorder() {
    throw new Error('Not implemented');
  }

  /**
   * Delegates traversal to preorder as a default iterator for trees
   */
  *[Symbol.iterator]() {
    yield *this.preorder();
  }

  depth(): number {
    throw new Error('Not implemented');
  }

  height(): number {
    throw new Error('Not implemented');
  }

  levelOrder(): number {
    throw new Error('Not implemented');
  }

  sort(): void {
    throw new Error('Not implemented');
  }

  /**
   * All root node have a parent point to itself
   */
  isRoot(): boolean {
    return this === this.parent;
  }

  isLeaf(): boolean {
    throw new Error('Not implemented');
  }

  hasChildren(): boolean {
    throw new Error('Not implemented');
  }

  isDisjuction(tree: Tree<T>): boolean {
    throw new Error('Not implemented');
  }

  get ancestors(): Tree<T> {
    throw new Error('Not implemented');
  }

  /**
   * Returns the children from the tree. Which means, all the same level
   */
  get children(): Tree<T>[] {
    if (!this.son) {
      return [];
    }

    const nodes: Tree<T>[] = [];
    let node = this.son;

    while (node) {
      nodes.push(node);
      node = node.next;
    }

    return nodes;
  }

  get parent(): Tree<T> {
    throw new Error('Not implemented');
  }

  get nextSiblings(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  get root(): Tree<T> {
    throw new Error('Not implemented');
  }

  subtree(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  /**
   *  join or concat the name?!
   * @param tree Tree<T>
   */
  join(tree: Tree<T>): Tree<T> {
    throw new Error('Not implemented');
  }

  /**
   * Add a leaf child to end of children' list
   * The last node represents the youngest son. So, the new created node is
   * append to that list with a apropriated parent
   *
   * @param data T
   */
  appendChild(data: T): Tree<T> {
    const tree = new Tree<T>(data);
    tree._parent = this;

    // track the previous tree traversal node
    let prevNode = null;
    // track the current tree traversal node
    let node = this.son;

    while (node) {
      prevNode = node;
      node = node.next;
    }

    // prevNode is null only if there's no child for this node
    if (prevNode === null) {
      this.son = tree;
    } else {
      prevNode.next = tree;
    }

    return tree;
  }

  removeChild(child: Tree<T>): Tree<T> {
    throw new Error('Not implemented');
  }

  map(): Tree<T>[] {
    throw new Error('Not implemented');
  }
}
