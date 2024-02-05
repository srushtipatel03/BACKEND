// insert and delete

#include <stdio.h>
#define n 5

int a[n], top = -1, ch;

int display()
{
    int i;
    for (i = 0; i <= top; i++)
    {
        printf("%d ", a[i]);
    }
    printf("\n");
}

void End_insert()
{
    int val;
    printf("enter value of End_insert :");
    scanf("%d", &val);

    if (top >= n - 1)
    {
        printf("array is full\n");
    }
    else
    {
        top++;
        a[top] = val;
    }
}

void End_delete()
{
    if (top < 0)
    {
        printf("array is empty\n");
    }
    else
    {
        top--;
    }
}

void First_insert()
{
    int val, i;
    printf("enter value to First_insert :");
    scanf("%d", &val);
    if (top > n - 1)
    {
        printf("array is full\n");
    }
    else if (top < 0)
    {
        top++;
        a[top] = val;
    }
    else
    {
        top++;
        for (i = top; i >= 0; i--)
        {
            a[i] = a[i - 1];
        }
        a[0] = val;
    }
}

void First_delete()
{
    int val, i;
    if (top <= 0)
    {
        printf("array is empty\n");
    }
    else if (top < 0)
    {
        top--;
        a[top] = val;
    }
    else
    {
        for (int i = 0; i <= top; i++)
        {
            a[i] = a[i + 1];
        }
        top--;
    }
}

int main()
{
    do
    {
        printf("press 1 for End_insert array\n");
        printf("press 2 for End_delete array\n");
        printf("press 3 for First_insert array\n");
        printf("press 4 for First_delete array\n");
        printf("press 5 for display array\n");
        printf("\n enter your choice : ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            End_insert();
            break;
        case 2:
            End_delete ();
            break;
        case 3:
            First_insert();
            break;
        case 4:
            First_delete();
            break;
        case 5:
            display();
            break;
        case 0:
            break;
        default:
            printf("\n\t please enter a valid choice (1/2/3/4/5)\n");
            break;
        }
    } while (ch != 0);
}