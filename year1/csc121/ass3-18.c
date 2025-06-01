#include <stdio.h>

// Sales-Commission Calculator

// ) One large chemical company pays its salespeople on a commission basis.
// The salespeople receive $200 per week plus 9% of their gross sales for that week.
// For example, a salesperson who sells $5000 worth of chemicals in a week receives $200 plus 9% of
// $5000, or a total of $650. Develop a program that will input each salesperson’s gross sales for last
// week and will calculate and display that salesperson’s earnings. Process one salesperson's figures at a
// time.

int main()
{
    float sales;
    float salesPersonGrossSales;

    while (sales != -1)
    {
        printf("Enter sales in dollars (-1 to end): ", sales);
        scanf("%f", &sales);

        salesPersonGrossSales = (float)200 + (9 * sales / 100);

        printf("Salary is: %.2f \n", salesPersonGrossSales);

        printf("Enter sales in dollars (-1 to end): \n");
        scanf("%f", &sales);
    }

    return 0;
}
