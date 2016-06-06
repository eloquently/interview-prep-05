import { expect } from 'chai';

import { TreeNode } from '../src/trees';
import * as trees from '../src/trees';

const smallTree_1 = new TreeNode(1);
const smallTree_2 = new TreeNode(2);
const smallTree_3 = new TreeNode(3);

smallTree_1.left = smallTree_2;
smallTree_1.right = smallTree_3;

const largeTree_1 = new TreeNode(1);
const largeTree_6 = new TreeNode(6);
const largeTree_3 = new TreeNode(3);

largeTree_1.left = largeTree_6;
largeTree_1.right = largeTree_3;

const largeTree_2 = new TreeNode(2);
const largeTree_4 = new TreeNode(4);

largeTree_6.left = largeTree_2;
largeTree_6.right = largeTree_4;

const largeTree_9 = new TreeNode(9);

largeTree_3.right = largeTree_9;

const largeTree_5 = new TreeNode(5);
const largeTree_0 = new TreeNode(0);

largeTree_9.left = largeTree_5;
largeTree_9.right = largeTree_0;

const bst = [];
for(let i = 0; i <= 15; i += 1) {
    bst.push(new TreeNode(i));
}

bst[5].left = bst[3];
bst[5].right = bst[8];
bst[3].left = bst[1];
bst[3].right = bst[4];
bst[8].right = bst[10];
bst[10].left = bst[9];
bst[10].right = bst[15];

describe('trees', () => {
    if(trees.basicSearch) {
        describe('basicSearch', () => {
            it('returns TreeNode', () => {
                expect(trees.basicSearch(largeTree_1, 1))
                    .to.be.instanceOf(TreeNode);
            });
            
            it('finds root', () => {
               expect(trees.basicSearch(largeTree_1, 1).data)
                    .to.eq(1);
            });
            
            it('finds leaf', () => {
               expect(trees.basicSearch(largeTree_1, 0).data)
                    .to.eq(0);
            });
            
            it('finds intermediate node', () => {
                expect(trees.basicSearch(largeTree_1, 9).data)
                    .to.eq(9);
            });
        });
    }
    
    if(trees.searchBST) {
        describe('searchBST', () => {
            it('returns TreeNode', () => {
                expect(trees.searchBST(bst[5], 1))
                    .to.be.instanceOf(TreeNode);
            });
            
            it('finds root', () => {
               expect(trees.searchBST(bst[5], 5))
                    .to.eq(bst[5]);
            });
            
            it('finds leaf', () => {
               expect(trees.searchBST(bst[5], 1))
                    .to.eq(bst[1]);
            });
            
            it('finds intermediate node', () => {
                expect(trees.searchBST(bst[5], 10))
                    .to.eq(bst[10]);
            });
        });
    }
    
    if(trees.insert) {
        describe('insert', () => {
            it('places 2 in correct spot', () => {
                trees.insert(bst[5], 2);
                expect(bst[1].right.data).to.eq(2);
            });
            
            it('places 7 in correct spot', () => {
                trees.insert(bst[5], 7);
                expect(bst[8].left.data).to.eq(7);
            });
            
            it('places 20 in correct spot', () => {
                trees.insert(bst[5], 20);
                expect(bst[15].right.data).to.eq(20);
            });
        });
    }
});