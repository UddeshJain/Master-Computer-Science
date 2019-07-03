/*
    * Implementation of a binary search tree Data Structure
    * @param {*} value - initial value to create a Node
*/
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
            if(value == currentNode.value) return this
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
    * Find - Search for node in the tree
    * @param {*} value - Value to find
    */
    find(value) {
        let currentNode = this.root
        if (currentNode === null) return false
        while(true) {
            if (value === currentNode.value) return currentNode
            if (value < currentNode.value) {
                if(currentNode.left === null) return false
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                if(currentNode.right === null) return false
                currentNode = currentNode.right
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(7)
tree.insert(15)
console.log(tree)
console.log(tree.find(2))