/* Class represnting LinkedList */

class LinkedList {
    constructor(value) {
        this.head = { value, next: null }
        this.tail = this.head
    }

    /* 
    * Inserts new node at the end of the list 
   * @param {*} value - value of the node
    */
    insert(value) {
        let node = { value, next: null }
        this.tail.next = node
        this.tail = node
    }

    /*
    * Removes the tail of LinkedList
    */
    removeTail() {
        let currentNode = this.head
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next
        }
        currentNode.next = null
        this.tail = currentNode
    }

    /*
    * Removes the head or first node of LinkedList
    */
    removeHead() {
        if (this.head === this.tail) {
            this.head = {}
            this.tail = this.head
        } else {
            this.head = this.head.next
        }
    }

    /* 
    * Checks the given value is head or not 
   * @param {value} - value to check
   * @return {boolean} - true if the value is equals to head value, otherwise false 
    */
    isHead(value) {
        return value === this.head.value
    }

    /*
    * Checks the given value is tail or not
    * @param {value} - value to check
    * @return {boolean} - true if the value is equals to tail value, otherwise false
    */
    isTail(value) {
        return value === this.tail.value
    }

    /*
    * Checks the given value is present in LinkedList or not
    * @param {value} - value to check
    * @return {boolean} - true if the value is present, otherwise false
    */
    conatins(value) {
        let currentNode = this.head
        while (currentNode !== this.tail) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next
        }
        return currentNode.value === value
    }

    /*
    * Inserts the node before given node
    * @param {value to insert, value of the node want to insert before} - Node to insert before given node
    */
    insertBefore(valueToInsert, valueOfExistingNode) {
        let currentNode = this.head
        while (currentNode !== this.tail) {
            if (valueOfExistingNode == this.head.value) {
                let newNode = { value: valueToInsert, next: this.head }
                this.head = newNode
                return
            }
            else if (currentNode.next.value == valueOfExistingNode) {
                let newNode = { value: valueToInsert, next: currentNode.next }
                currentNode.next = newNode
                return
            }
            currentNode = currentNode.next
        }
        return 'The node before to insert the new node is not present in the list'
    }

    /*
    * Inserts the node after given node
    * @param {value to insert, value of the node want to insert after} - Node to insert after given node
    */
    insertAfter(valueToInsert, valueOfExistingNode) {
        let currentNode = this.head
        while (currentNode !== this.tail) {
            if (valueOfExistingNode == this.tail.value) {
                let newNode = { value: valueToInsert, next: null }
                this.tail.next = newNode
                this.tail = newNode
                return
            }
            else if (currentNode.value == valueOfExistingNode) {
                let newNode = { value: valueToInsert, next: currentNode.next }
                currentNode.next = newNode
                return
            }
            currentNode = currentNode.next
        }
        return 'The node after to insert new node is not present in the list'
    }
}

const myLinkedList = new LinkedList(1) // Creates a instance with initial node of value 1
myLinkedList.insert(2)
myLinkedList.insert(3)
myLinkedList.insert(4)
myLinkedList.insert(5)
myLinkedList.removeTail()
myLinkedList.removeHead()
myLinkedList.isHead(2)                          // Return true if head.value is 2 otherwise false
myLinkedList.conatins(1)                      // Returns true if list contains any node with value 1
myLinkedList.insertBefore(1, 2)
myLinkedList.insertAfter(5, 4)
console.log(myLinkedList)