#include <stdio.h>
#include <stdlib.h>
struct Node {
    int data;
    struct Node *link;
};

// creating the head pointer
struct Node *START = NULL;

// creating the node
struct Node *createNode() {
    struct Node *node;
    node = (struct Node *)malloc(sizeof(struct Node *));
    return node;
}

// inserting the node at the end
void insertAtEnd(int data) {
    struct Node *n, *t;
    n = createNode();
    n->data = data;
    n->link = NULL;

    if(START==NULL){
        START = n;
    } else {
        t = START;
        while(t->link!=NULL) {
            t=t->link;
        }
        t->link = n;
    }
}

// displaying all the nodes;
void displayList() {
    struct Node *t;
    t = START;
    while (t!=NULL) {
        printf("%d\n", t->data);
        t = t->link;
    }
}
int main() {
    struct Node *root;
    root = createNode();
    insertAtEnd(10);
    insertAtEnd(20);
    insertAtEnd(30);
    insertAtEnd(40);
    insertAtEnd(50);

    displayList();

    return 0;
}
