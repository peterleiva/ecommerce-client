import { Tree } from './tree.model';

describe('Tree Class', async() => {
  let tree: Tree<number>;

  beforeEach(async () => {
    tree = new Tree<number>();
  });

  it('should create a new tree', async () => {
    expect(tree).toBeDefined();
  });

  afterEach(async () => {
    tree = null;
  })
});