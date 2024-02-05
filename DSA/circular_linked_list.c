#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};
struct node *head = NULL;

void insert_End(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;

    if (head == NULL)
    {
        head = temp;
        temp->next = head;
        return;
    }
    while (ptr->next != head)
    {
        ptr = ptr->next;
    }
    ptr->next = temp;
    temp->next = head;
    return;
}
void delete_End()
{
    struct node *ptr = head;

    struct node *prev;
    if (head == NULL)
    {
        printf("List is already empty....");
        return;
    }
    while (ptr->next != head)
    {
        prev = ptr;
        ptr = ptr->next;
    }
    prev->next = head;
    free(ptr);
}

void insert_First(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;

    if (head == NULL)
    {
        head = temp;
        temp->next = head;
        return;
    }
    while (ptr->next != head)
    {
        ptr = ptr->next;
    }
    ptr->next = temp;
    temp->next = head;
    head = temp;
}

void delete_First()
{
    struct node *ptr = head;
    struct node *temp;

    if (head == NULL)
    {
        printf("List is already empty....");
        return;
    }
    while (ptr->next != head)
    {
        ptr = ptr->next;
    }
    temp = head;
    head = head->next;
    ptr->next = head;
    free(temp);
}

void insert_Mid(int val, int pos)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;

    while (ptr->data != pos)
    {
        ptr = ptr->next;
    }

    temp->next = ptr->next;
    ptr->next = temp;
}

void delete_Mid(int pos)
{
    struct node *ptr = head;
    struct node *prev;

    while (ptr->data != pos)
    {
        prev = ptr;
        ptr = ptr->next;
    }
    prev->next = ptr->next;
    free(ptr);
}

void display()
{
    struct node *ptr = head;
    if (head == NULL)
    {
        printf("List is empty....");
    }
    else
    {
        while (ptr->next != head)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        printf("%d ", ptr->data);
    }
    printf("\n");
}

int main()
{
    int choice, value, position;

    while (1)
    {
        printf("1. Insert end\n");
        printf("2. Delete end\n");
        printf("3. Insert frist\n");
        printf("4. Delete frist\n");
        printf("5. Insert mid\n");
        printf("6. Delete mid\n");
        printf("7. Display the linked list\n");
        printf("8. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insert_End(value);
            break;

        case 2:
            delete_End();
            break;

        case 3:
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insert_First(value);
            break;

        case 4:
            delete_First();
            break;

        case 5:
            printf("Enter the position to insert: ");
            scanf("%d", &position);
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insert_Mid(value, position);
            break;

        case 6:
            printf("Enter the position to delete: ");
            scanf("%d", &position);
            delete_Mid(position);
            break;

        case 7:
            display();
            break;

        case 8:
            exit(0);

        default:
            printf("Invalid choice.\n");
        }
    }

    return 0;
}