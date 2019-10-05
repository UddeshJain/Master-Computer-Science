#include <stdio.h>
#include <stdlib.h>
#define MAX 100

int top=-1, A[MAX];

// the push operation
void push(int data) {
    if(top > MAX-1) {
        printf("Stack Overflow\n");
        return;
    } else {
        A[++top] = data;
    }
}
// the pop operation
int pop() {
    if(top==-1) {
        printf("Stack Underflow\n");
        return 0;
    } else {
        return A[top--];
    }
}
int main() {
    // stack using arrys
    int i;
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);

    for(i=0;i<=top;i++) {
        printf("%d\n", A[i]);
    }

    printf("Poped Element is : %d\n", pop());

    push(70);
    push(80);

    for(i=0;i<=top;i++) {
        printf("%d\n", A[i]);
    }

    printf("Poped Element is : %d\n", pop());
    return 0;
}
