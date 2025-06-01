// Write statements that assign random integers to the variable n in the following ranges
// a) 1 ≤ n ≤ 6
// b) 100 ≤ n ≤ 1000
// c) 0 ≤ n ≤ 19
// d) 1000 ≤ n ≤ 2222
// e) –1 ≤ n ≤ 1
// f) –3 ≤ n ≤ 11

#include <stdio.h>
#include <stdlib.h>

int randomNumber(int start, int stop);

int main()
{
    int start;
    int stop;
    printf("Enter start: ", start);
    scanf("%d", &start);
    printf("Enter stop: ", stop);
    scanf("%d", &stop);

    srand(time(NULL));

    printf("Random number generated between %d and %d is  %d", start, stop, randomNumber(start, stop));
}

int randomNumber(int start, int stop)
{
    return start + (rand() % stop);
}
