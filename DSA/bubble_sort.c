#include <stdio.h>
#include <stdlib.h>
#define n 10

int bubblesort(int a[])
{
    int k;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                k = a[j];
                a[j] = a[j + 1];
                a[j + 1] = k;
            }
        }
    }
}

int main()
{
    int a[n];
    for (int i = 0; i < n; i++)
    {
        a[i] = rand() % 100;
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ,", a[i]);
    }
    bubblesort(a);

    printf("\n sort array is:");
    for (int i = 0; i < n; i++)
    {
        printf("%d ,", a[i]);
    }
}