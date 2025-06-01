// Car Rental Services
// A car rental service charges a minimum fee of $25.00 to rent a car for
// 8 hours, and charges an additional $5 per hour after 8 hours. The maximum charge per day is $50
// exclusive of service tax. The company charges an additional $0.50 per hour as service tax. Assume that
// no car is rented for more than 72 hours at a time. If a car is rented for more than 24 hours, then rental
// is calculated on a daily basis. Write a program that calculates and prints the rental charges for each of
// three customers who rented cars from this agency yesterday. You should enter the hours for which the
// car has been rented for each customer. Your program should print the results in a neat tabular format
// and should calculate and print the total of yesterday’s receipts. The program should use the function
// calculateCharges to determine the charges for each customer. Your outputs should appear in the
// following format

#include <stdio.h>

int calculateCharges(int duration);

int main()
{
    int duration;
    int totalPrice;

    printf("Enter duration in hours: ");
    scanf("%d", &duration);

    // charges should be made per day
    // for (int i = 0; i < duration; i += 24)
    //     printf("%.2f", calculateCharges(duration - i));

    while (duration > 24)
    {
        if(duration < 24){
            totalPrice = calculateCharges(duration);
        }

        totalPrice += calculateCharges(24);

        duration -= 24;
    }

    // printf("%.2f", calculateCharges(duration));
    printf("%d", totalPrice);

    return 0;
}

int calculateCharges(int hours)
{
    int totalCharge;
    // 0.5 for service tex per hour
    int serviceTax = 0.5 * hours;

    // for the first 8 hrs, charge min fee of $25
    int dailyCharge = 25;
    hours -= 8;

    // add $5 for additional hour
    for (int i = 0; i < hours; i++)
    {
        if (dailyCharge > 50)
        {
            break;
        }
        dailyCharge += 5;
    }

    totalCharge = dailyCharge + serviceTax;

    return totalCharge;
}

/*
    [1, 2, 3, 6] sum = 8 NO
    [1, 2, 4, 4] sum = 8 YES

    [7, 6, 4]

    create a array of complement

    for each value,
        check if the current value + complement values === target 
        store the complement of current value

        
        think out loud
*/
