// Rounding Numbers
// Function floor may be used to round a number to a specific decimal place

#include <stdio.h>
#include <math.h>

double roundToInteger(double number);
double roundToTenth(double number);
double roundToHundredth(double number);
double roundToThousandth(double number);

int main(){
    float x;

    printf("Enter number: ");
    scanf("%f", &x);

    printf("%.2f converted to Integer is %.0f \n", x, roundToInteger(x));
    printf("%.2f converted to Tenth value is %.1f \n", x, roundToTenth(x));
    printf("%.2f converted to Hundredth is %.2f \n", x, roundToHundredth(x));
    printf("%.2f converted to Thousandth is %.3f \n", x, roundToThousandth(x));
}

double roundToInteger(double number){
    return floor(number * 1 + .5);
}

double roundToTenth(double number){
    return floor(number * 10 + .5) / 10;
}

double roundToHundredth(double number){
    return floor(number * 100 + .5) / 100;
}

double roundToThousandth(double number){
    return floor(number * 1000 + .5) / 1000;
}