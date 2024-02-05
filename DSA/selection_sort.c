#include <stdio.h>
#include <stdlib.h>
#define n 10

int selectionsort(int a[])
{
    int k;
    for (int i = 0; i < n; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if (a[i] > a[j])
            {
                k = a[i];
                a[i] = a[j];
                a[j] = k;
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
    selectionsort(a);

    printf("\n sort array is:");
    for (int i = 0; i < n; i++)
    {
        printf("%d ,", a[i]);
    }
}