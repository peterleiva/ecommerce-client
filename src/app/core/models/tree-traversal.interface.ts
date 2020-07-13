/**
 * Every tree has some ways to navigate over it. Tree Traversal defines those
 * different ways to check on nodes
 * TODO definir traversal apenas para árvores ordenadas!!!
 */
export default interface TreeTraversal<T> {
  /**
   * Atravessa o nó antes de ir para os seus filhos
   */
  preorder(): Generator<T>;

  /**
   * Atravessa o nó após checar
   */
  inorder(): Generator<T>;
  posorder(): Generator<T>;
  reverseInorder(): Generator<T>;
  [Symbol.iterator](): Generator<T>;
}
