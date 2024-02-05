#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
    struct node *prev;
};
struct node *head = NULL;

void insertEnd(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;
    temp->next = NULL;
    temp->prev = NULL;

    if (head == NULL)
    {
        head = temp;
        return;
    }
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    ptr->next = temp;
    temp->prev = ptr;
    return;
}

void deleteEnd()
{
    struct node *ptr = head;

    struct node *prev;
    if (head == NULL)
    {
        printf("List is already empty....");
        return;
    }
    else if (head->next == NULL)
    {
        head = NULL;
        free(ptr);
        return;
    }
    while (ptr->next != NULL)
    {
        ptr = ptr->next;
    }
    ptr->prev->next = NULL;
    free(ptr);
    return;
}

void insertFirst(int val)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;

    if (head == NULL)
    {
        temp->next = NULL;
        temp->prev = NULL;
        head = temp;
        return;
    }
    temp->next = ptr;
    temp->prev = NULL;
    ptr->prev = temp;
    head = temp;
    return;
}

void deleteFirst()
{
    struct node *ptr = head;
    if (head == NULL)
    {
        printf("List is already empty....");
        return;
    }
    else if (head->next == NULL)
    {
        head = NULL;
        free(ptr);
        return;
    }
    head = ptr->next;
    head->prev = NULL;
    free(ptr);
    return;
}

void insertMid(int val, int pos)
{
    struct node *ptr = head;
    struct node *temp = malloc(sizeof(struct node));
    temp->data = val;

    while (ptr->data != pos)
    {
        ptr = ptr->next;
    }

    temp->next = ptr->next;
    temp->prev = ptr;
    ptr->next->prev = temp;
    ptr->next = temp;

    return;
}

void deleteMid(int pos)
{
    struct node *ptr = head;
    struct node *prev;

    while (ptr->data != pos)
    {
        prev = ptr;
        ptr = ptr->next;
    }
    ptr->prev->next = ptr->next;
    ptr->next->prev = ptr->prev;

    free(ptr);
    return;
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
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        printf("\n");
    }
}

int main()
{
    int choice, value, position;

    while (1)
    {
        printf("1. last Insert \n");
        printf("2. last Delete \n");
        printf("3. first Insert\n");
        printf("4. first Delete\n");
        printf("5. mid Insert \n");
        printf("6. mid Delete \n");
        printf("7. Display the linked list\n");
        printf("8. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insertEnd(value);
            break;

        case 2:
            deleteEnd();
            break;

        case 3:
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insertFirst(value);
            break;

        case 4:
            deleteFirst();
            break;

        case 5:
            printf("Enter the position to insert: ");
            scanf("%d", &position);
            printf("Enter the value to insert: ");
            scanf("%d", &value);
            insertMid(value, position);
            break;

        case 6:
            printf("Enter the position to delete: ");
            scanf("%d", &position);
            deleteMid(position);
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