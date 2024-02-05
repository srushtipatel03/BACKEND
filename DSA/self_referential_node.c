#include <stdio.h>
struct node
{
    int data;
    char ch;
    struct node *ptr;
};

int main()
{
    struct node a, b, c;

    a.data = 3193;
    a.ch = 'S';
    a.ptr = NULL;

    b.data = 11;
    b.ch = 's';
    b.ptr = NULL;

    printf("A data: %d, Char: %c", a.data, a.ch);
    printf("\nB data: %d, char: %c", b.data, b.ch);
    a.ptr = &b;
    b.ptr = &a;
    printf("\n\nA data: %d, char: %c", b.ptr->data, b.ptr->ch);
    printf("\nB data: %d, char: %c", a.ptr->data, a.ptr->ch);
}