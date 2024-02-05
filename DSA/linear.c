#include <stdio.h>
#include <stdlib.h>
#define n 20

int a[n], i, val;
int linear_element(int a[], int v)
{
    for (int i = 0; i <= n - 1; i++)
    {
        if (a[i] == v)
            return i + 1;
    }
    return -1;
}

int main()
{
    int a[n], i, v, b;

    for (i = 0; i <= n; i++)
    {
        a[i] = rand() % 100;
    }
    for (i = 0; i <= n - 1; i++)
    {
        printf("%d ,", a[i]);
    }

    printf("\n enter the search element --> ");
    scanf("%d", &v);

    b = linear_element(a, v);
    if (b > 0)
    {
        printf("%d  position of search element is found", b);
    }
    else
    {
        printf("search element is not found...");
    }
}