// Write  a program in C that generate a prime number and then 
// convert it to an equivalent number in octal using functions

#include <stdio.h>
#include <stdlib.h>

int generateRandomPrimeNumber(int start, int stop)

int main(){
    // How do i generate prime number bayi???
    int start, stop;

    printf("Enter start: ", start);
    scanf("%d", &start);
    printf("Enter stop: ", stop);
    scanf("%d", &stop);

    srand(time(NULL));

    int randomPrime = generateRandomPrimeNumber(start, stop);
}

int generateRandomPrimeNumber(int start, int stop){
    int randNo;
    randNo = start + (rand() % stop);
    for (size_t i = 2; i < randNo; ++i){
        if(randNo % i == 0){
            // Is not a random number
        }
    }
}