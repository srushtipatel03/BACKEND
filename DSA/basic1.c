/*
    operator => arithmatic    => + -  * / %
             => relational   => < > <= >= == !=
             => logical       => && ||(pipe) !
             => assignment    => += -= *= /= %=
             => unary         => ++ --
             => ternory       => ? :
*/

/*

#include<stdio.h>
int main ()
{
 int a=1,b=2,c;
 // AND --> frist digite 0 than no chek condition
 // OR  --> frist digite 1 than no chek condition
 c = a && b;
printf("\na: %d b: %d c: %d",a,b,c);

 c = a || b;
printf("\na: %d b: %d c: %d",a,b,c);

 c = --a && b;
printf("\na: %d b: %d c: %d",a,b,c);

 c = --a && --b;
printf("\na: %d b: %d c: %d",a,b,c);

 c = a || --b;
printf("\na: %d b: %d c: %d",a,b,c);
}

*/

#include<stdio.h>

int main ()
{
 int a=1,b=2,c=1,d;
 
 d  = a && b && --c;
printf("\na: %d b: %d c: %d d: %d",a,b,c,d);

 d  = a && b || --c;
printf("\na: %d b: %d c: %d d: %d",a,b,c,d);

 d  = a || b && --c;
printf("\na: %d b: %d c: %d d: %d",a,b,c,d);
}