//  A prime number is any natural number greater than 1 that is divisible only by 1 and by itself.
// Write a C program that reads an integer and determines whether it is a prime number or not.

#include <stdio.h>

int main()
{
    int number;
    int flag;
    printf("Enter number to check if prime: ", number);
    scanf("%d", &number);
    for (int i = 2; i < number; i++)
    {
        // if number can be divided by no less than number and not the number itself then its not a prime number
        if (number % i == 0)
        {
           flag = 0;
        }
        if(number % i != 0)
        {
           flag = 1;
        }
    }

    printf("%d", flag);
}