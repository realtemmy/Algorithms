#include <stdio.h>

// Salary Calculator
// Develop a program that will determine the gross pay for each of several employees.
// The company pays “straight time” for the first 40 hours worked by each employee
// and pays “time-and-a-half” for all hours worked in excess of 40 hours.
// You’re given a list of the employees of the company, the number of hours each
// employee worked last week and the hourly rate of each employee.
// Your program should input this information for each employee and should determine and display the employee's gross pay.

int main()
{

    // Variable declarations
    float grossPay;
    float hourlyRate;
    float hoursWorked;
    float excessHoursWorked;
    float excessHoursWorkedPayment;

    printf("Enter # of hours worked (-1 to end): ", hoursWorked);
    scanf("%f", &hoursWorked);

    while (hoursWorked != -1)
    {
        printf("Enter hourly rate of the worker ($00.00): ", hourlyRate);
        scanf("%f", &hourlyRate);
        if (hoursWorked < 0)
        {
            printf("Number of hours worked cannot be negative");
            return;
        }
        else if (hoursWorked <= 40)
        {
            grossPay = hoursWorked * hourlyRate;
            printf("Salary is %.2f \n", grossPay);
        }
        else
        {
            excessHoursWorked = hoursWorked - 40;
            excessHoursWorkedPayment = excessHoursWorked * 1.5 * hourlyRate;
            grossPay = (40 * hourlyRate) + excessHoursWorkedPayment;
            printf("Salary is %.2f \n", grossPay);
        }

        printf("Enter hourly rate of the worker ($00.0): \n");
        scanf("%f", &hoursWorked);
    }

    return 0;
}