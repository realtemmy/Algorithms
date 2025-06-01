// Rectangle of Asterisks
// Write a function that displays a solid rectangle of asterisks
// whose sides are specified in the integer parameters side1 and side2.

#include <stdio.h>

void solidRectangle(int side1, int side2);

int main()
{
    int side1;
    int side2;
    printf("Enter side1 digit: ", side1);
    scanf("%d", &side1);
    printf("Enter side2: ", side2);
    scanf("%d", &side2);

    solidRectangle(side1, side2);
}

void solidRectangle(side1, side2)
{
    for (int i = 0; i < side1; i++)
    {
        for (int j = 0; j < side2; j++)
        {
            printf("*");
        }
        puts("");
    }
}