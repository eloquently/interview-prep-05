export class TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export const preorder = (root) => {
    if(root === undefined) return;
    
    preorder(root.left);
    console.log(root.data);
    preorder(root.right);
};

export const inorder = (root) => {
    if(root === undefined) return;
    
    console.log(root.data);
    inorder(root.left);
    inorder(root.right);
};

export const postorder = (root) => {
    if(root === undefined) return;
    
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
};

export const basicSearch = (root, needle) => {
    if(root === undefined) return;
    
    if(root.data == needle) return root;
    
    const leftSearch = basicSearch(root.left, needle);
    if(leftSearch !== undefined)
        return leftSearch;

    const rightSearch = basicSearch(root.right, needle);
    if(rightSearch !== undefined)
        return rightSearch;
};

export const searchBST = (root, needle) => {
    if(root === undefined) return;
    if(root.data === needle) return root;
    
    if(needle < root.data) return searchBST(root.left, needle);
    if(needle > root.data) return searchBST(root.right, needle);
}

export const insert = (root, newValue) => {
    const left = newValue < root.data;
    
    if(left && root.left !== undefined)
        insert(root.left, newValue);
    else if(left && root.left === undefined)
        root.left = new TreeNode(newValue);
    else if(!left && root.right !== undefined)
        insert(root.right, newValue);
    else
        root.right = new TreeNode(newValue);
    
};

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


console.log(basicSearch(largeTree_1, 9))