#include <stdio.h>
#include <stdlib.h>
#define MAX 10

int Q[MAX], tail=-1, head=-1;

// enqueue
void enqueue(int data) {
    // setting the head
    if(head==-1) {
        ++head;
    }
    // checking the tail value
    if(tail==MAX-1) {
        printf("Queue is full.\n");
    } else {
        Q[++tail] = data;
    }
}

// dequeue
int dequeue() {
    if(head==-1 && head==tail) {
        return 0;
    } else {
        return Q[head++];
    }
}
void display() {
    int i;
    for(i=head;i<=tail;i++) {
        printf("%d ", Q[i]);
    }
    printf("\n");
}
int main() {
    int i;
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    enqueue(50);
    enqueue(60);
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();
    printf("Removed element : %d\n", dequeue());
    display();


    return 0;
}
