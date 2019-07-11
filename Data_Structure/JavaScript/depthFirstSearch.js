// This implementation is for binary tree. It will not work with trees more than two child nodes.

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    /*
    * Insert - to insert new node to the tree
    * @param {*} value - initial value to create a Node
    */
    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
            return this
        }
        let currentNode = this.root
        while (true) {
            if (value == currentNode.value) return this
            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            } else {
                if (value > currentNode.value) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    /*
    * Treverse the tree in Depth First Order with PreOrder
    */
    DFSPreOrder() {
        var data = []
        function traverse(node) {
            data.push(node.value)
            if (node.left) traverse(node.left)          // Recursive call of function traverse for left child
            if (node.right) traverse(node.right)     // Recursive call of function traverse for right child
        }
        traverse(this.root)
        return data
    }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.DFSPreOrder())         // [10, 6, 3, 8, 15, 20]