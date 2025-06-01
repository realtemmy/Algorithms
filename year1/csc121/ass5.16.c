// Sides of a Triangle
// Write a function that reads three nonzero double values as the sides of a triangle,
// and calculates and returns the area of the triangle as a double variable.
// It should also check whether the numbers represent the sides of a triangle before calculating the area.
// Use this function in a program that inputs a series of sets of numbers.

#include <stdio.h>
#include <math.h>

double area(double side1, double side2, double side3);

int main()
{
    float side1;
    float side2;
    float side3;

    printf("Enter first side: ", side1);
    scanf("%f", &side1);
    printf("Enter second side: ");
    scanf("%f", &side2);
    printf("Enter third side: ", side3);
    scanf("%f", &side3);

    printf("Area of the given sides is %f", area(side1, side2, side3));
}

double area(double side1, double side2, double side3)
{
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
    {
        double s = side1 + side2 + side3;
        double area = sqrt(s * (s - side1) * (s - side2) * (s - side3));
        return area;
    }else{
        printf("Sides do not represent a triangle");
    }
}