// Calculating card limits

// Collecting money becomes increasingly difficult during periods of recession, 
// so companies may tighten their credit limits to prevent their accounts
// receivable(money owed to them) from becoming too large.
// In response to a prolonged recession, one company has cut its customers’ credit limits in half.
// Thus, if a particular customer had a credit limit of $2000, it’s now $1000.
// If a customer had a credit limit of $5000, it’s now $2500.Write a program that analyzes
// the credit status of three customers of this company.For each customer you’re given:

#include <stdio.h>

    int main(void){
    int accNumber;
    int creditLimitBeforeRecession;
    int currentBalance;
    float newCreditLimit;

    for (int i = 0; i<3; i++){
        printf("Enter account number: ", accNumber);
        scanf("%d", &accNumber);
        printf("Enter credit card limit: ");
        scanf("%d", &creditLimitBeforeRecession);
        printf("Enter current balance: ", currentBalance);
        scanf("%d", &currentBalance);

        newCreditLimit = creditLimitBeforeRecession / 2;

        printf("%.2f \n", newCreditLimit);

        if(currentBalance > newCreditLimit){
            printf("%d has a current balance that exceeds new credit limit \n", accNumber);
        }
    }
}