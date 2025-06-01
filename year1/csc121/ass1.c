// Mortgage Calculator)
// Develop a C program to calculate the interest accrued on a bank customer's mortgage.
// For each customer, the following facts are available

#include <stdio.h>

int main()
{
    // Defiing variables
    int accountNumber;
    int mortgageAmount;
    int mortgageTerm;
    float interestRate;
    float totalInterestPayable;
    int totalAmount;

    // Processing

    printf("Enter account number (-1 to end): \n", accountNumber);
    scanf("%d", &accountNumber);

    while (accountNumber != -1)
    {
        printf("Enter mortgage amount (in dollars): \n", mortgageAmount);
        scanf("%d", &mortgageAmount);
        printf("Enter mortgage term (in years): \n", mortgageTerm);
        scanf("%d", &mortgageTerm);
        printf("Enter interest rate (as a decimal): \n", interestRate);
        scanf("%f", &interestRate);

        totalInterestPayable = mortgageAmount * interestRate * mortgageTerm;
        totalAmount = (totalInterestPayable + mortgageAmount) / (mortgageTerm * 12);

        // Execution
        printf("The monthly payable interest is %d \n", totalAmount);

        printf("Enter account number (-1 to end): \n", accountNumber);
        scanf("%d", &accountNumber);
    }

    return 0;
}
