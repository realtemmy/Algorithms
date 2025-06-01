#include <stdio.h>

// Interest Calculator
int main()
{
    float principal;
    float rate;
    int days;
    float interest;

    printf("Enter loan principal (-1 to end): ", principal);
    scanf("%f", &principal);

    while (principal != -1)
    {
        printf("Enter interest rate: ", rate);
        scanf("%f", &rate);
        printf("Enter term of the loan in days: ", days);
        scanf("%d", &days);
        interest = (principal * rate * days) / 365;
        printf("The interest charge is $%.2f \n", interest);

        printf("Enter loan principal (-1 to end): ");
        scanf("%f", &principal);
    }
}