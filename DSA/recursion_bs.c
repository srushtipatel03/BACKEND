// recursion binary search

#include <stdio.h>

int Recursive_Binary_Search(int a[], int l, int h, int element)
{
    if (l <= h)
    {
        int mid = l + (h - l) / 2;

        if (a[mid] == element)
        {
            return mid;
        }
        else if (a[mid] < element)
        {
            return Recursive_Binary_Search(a, mid + 1, h, element);
        }
        else
        {
            return Recursive_Binary_Search(a, l, mid - 1, element);
        }
    }

    return -1;
}

int main()
{
    int a[] = {10, 20, 30, 40, 50};
    int n = sizeof(a) / sizeof(a[0]);
    int l;

    printf("Enter Searching Element\n");
    scanf("%d", &l);

    int result = Recursive_Binary_Search(a, 0, n - 1, l);

    if (result == -1)
    {
        printf("Element Is Not Found\n");
    }
    else
    {
        printf("Element Is Found at Index %d\n", result);
    }

    return 0;
}