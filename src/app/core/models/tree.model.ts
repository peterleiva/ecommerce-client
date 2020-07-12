/**
 * A generic tree implementation with children and parent
 *
 * @version 0.1.0
 * @todo iterable - breadth, ...
 * @todo arraymap function
 * @todo map function
 */
export class Tree<T> {
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

  getChildren(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  attachChild(data: T): Tree<T> {
    throw new Error('Not implemented');
  }

  get ancestors(): Tree<T> {
    throw new Error('Not implemented');
  }

  get parent(): Tree<T> {
    throw new Error('Not implemented');
  }

  subtree(): Tree<T>[] {
    throw new Error('Not implemented');
  }

  deattachChild(child: Tree<T>): Tree<T> {
    throw new Error('Not implemented');
  }

  rightSiblings(): Tree<T> {
    throw new Error('Not implemented');
  }

  map(): Tree<T>[] {
    throw new Error('Not implemented');
  }
}