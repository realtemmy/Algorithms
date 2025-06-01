// Hypotenuse Calculations
#include <stdio.h>
#include <math.h>

double hypotenuse(double opp, double adj);

int main(){
    float adj;
    float opp;
    printf("Enter Adjacent digit: ");
    scanf("%f", &adj);
    printf("Enter Opposite digit: ");
    scanf("%f", &opp);
    printf("The hypotenuse side is %.2f", hypotenuse(opp, adj));
}

double hypotenuse(double opp, double adj){
    return sqrt(pow(opp, 2) + pow(adj, 2));
}
