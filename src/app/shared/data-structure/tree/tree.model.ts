import TreeTraversal from './tree-traversal.interface';

/**
 * A generic tree ordered container implementation
 * The tree contains a pointer to parent, oldest son and a next which represents
 * the next youngest tree child. There's some arithmetic operations, also
 * some traversal one. The tree is assumed to be ordered by the child position
 * according to next
 *
 * @version 0.1.0
 * @todo iterable - breadth, ...
 * @todo arraymap function
 * @todo map function
 * @todo verificar ciclos
 */
export class Tree<T> {
  private _parent: Tree<T>;
  private son: Tree<T>;
  private next: Tree<T>;

  constructor(private _data: T = null) {
    this.son = this.next = null;
    this._parent = this;
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
  // private *preorder() {
  //   throw new Error('Not implemented');
  // }

  // /**
  //  * Iterator in posorder manner
  //  */
  // private *posorder() {
  //   throw new Error('Not implemented');
  // }

  // /**
  //  * Iterator in inorder manner
  //  */
  // private *inorder() {
  //   throw new Error('Not implemented');
  // }

  // /**
  //  * 
  //  */
  // private *reverseInorder() {
  //   throw new Error('Not implemented');
  // }

  // /**
  //  * Delegates traversal to preorder as a default iterator for trees
  //  */
  // private *[Symbol.iterator]() {
  //   yield *this.preorder();
  // }

  private depth(): number {
    throw new Error('Not implemented');
  }

  private height(): number {
    throw new Error('Not implemented');
  }

  private levelOrder(): number {
    throw new Error('Not implemented');
  }

  private sort(): void {
    throw new Error('Not implemented');
  }

  /**
   * All root node have a parent point to itself
   */
  isRoot(): boolean {
    return this === this.parent;
  }

  /**
   * A node is a leaf only if it has no children
   */
  isLeaf(): boolean {
    return !this.hasChildren();
  }

  /**
   * Verifies if there's any child node
   * A tree with no child have a null son attribute
   */
  hasChildren(): boolean {
    return this.son !== null;
  }

  private isDisjuction(tree: Tree<T>): boolean {
    throw new Error('Not implemented');
  }

  private get ancestors(): Tree<T> {
    throw new Error('Not implemented');
  }

  /**
   * Returns the children from the tree. Which means, all the same level
   */
  get children(): Tree<T>[] {
    if (!this.hasChildren()) {
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

  /**
   * Gets the tree parent node for a subtree and returns itself for rooted tree
   */
  get parent(): Tree<T> {
    return this._parent;
  }

  private get nextSiblings(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  private get root(): Tree<T> {
    throw new Error('Not implemented');
  }

  private subtree(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  /**
   *  join or concat the name?!
   * @param tree Tree<T>
   */
  private join(tree: Tree<T>): Tree<T> {
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

  private removeChild(child: Tree<T>): Tree<T> {
    throw new Error('Not implemented');
  }

  private map(): Tree<T>[] {
    throw new Error('Not implemented');
  }
}
