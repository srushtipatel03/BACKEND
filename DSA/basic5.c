//10 20 30 40 50 ---> 50 20 30 40 10

#include <stdio.h>

int main ()
{
    int a[10],i,t,n=5;

    for(i=0;i<n;i++){
        printf("%d = ",i);
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        if(i==0)
        {
            t=a[i];
            a[i]=a[n-1];
            a[n-1]=t;
        }
    }
    for(i=0;i<n;i++)
    {
        printf("%d\t",a[i]);
    }
}