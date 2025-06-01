#include <stdio.h>
#include <stdlib.h>

int main(){
    int a;
    int b;
    int y;

    printf("Enter shifting value: ");
    scanf("%d", &a);
    printf("Enter scaling factor: ");
    scanf("%d", &b);

    srand(time(NULL));

    y = a + rand() % b;
    printf("Random number generated is %d", y);
}