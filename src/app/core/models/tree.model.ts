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
  private _children: Array<Tree<T>>;
  private _parent: Array<Tree<T>>;

  constructor(private _data?: T) {
    this._parent = null;
    this._children = [];
  }

  get data(): T {
    return this.data;
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

  get children(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  get parent(): Tree<T> {
    throw new Error('Not implemented');
  }

  get siblings(): Tree<T> {
    throw new Error('Not implemented');
  }

  get root(): Tree<T> {
    throw new Error('Not implemented');
  }

  subtree(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  addChild(data: T): Tree<T> {
    throw new Error('Not implemented');
  }

  removeChild(child: Tree<T>): Tree<T> {
    throw new Error('Not implemented');
  }

  map(): Tree<T>[] {
    throw new Error('Not implemented');
  }
}
