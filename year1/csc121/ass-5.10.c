// Rounding Numbers
// An application of function ceil is rounding a value to the nearest integer.
// The statement: y = ceil(x + .5);

#include <stdio.h>
#include <math.h>

int main()
{
    double y;
    double x;
    printf("Enter a number: ");
    scanf("%f", &x);

    y = ceil(x + .5);
    printf("%.2f was approximated to be %.1f",x,y);
}