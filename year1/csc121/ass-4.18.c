//  (Bar-Chart Printing Program)
// One interesting application of computers is drawing graphs and bar charts.
// Write a program that reads five numbers(each between 1 and 30).
// For each number read, your program should print a line containing that number of adjacent asterisks.
// For example, if your program reads the number seven, it should print *******.

#include <stdio.h>

int main(void)
{
    int count;
    int number;

    for (int i = 0; i < 5; i++)
    {
        printf("\nEnter a number between 1 and 30: ", number);
        scanf("%d", &number);
        if (number < 1 || number > 30)
            printf("Number must be between 1 and 30");
            break;
        for (int i = 0; i < number; i++)
        {
            printf("*");
        }
    }

    return 0;
}