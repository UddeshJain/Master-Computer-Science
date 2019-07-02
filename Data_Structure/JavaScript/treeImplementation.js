/*
    * Implementation of tree Data Structure
    * @param {*} data - initial data to create a Node
*/

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(element => {
            return node.data !== data
        })
    }
}

class Tree {}