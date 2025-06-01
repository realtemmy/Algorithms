// Finding the largest number (i.e., the maximum of a group of numbers)
// Your program should use three variables as shown below.
// counter: A counter to count to 10 
// (i.e., to keep track of how many numbers have been input and to determine when all 10 numbers have been processed)
// number: The current number input to the program
// largest: The largest number found so far


// QUESTION 3.65
// Find the Two Largest Numbers) Using an approach similar to Exercise 3.23, find the two
// largest values of the 10 numbers

#include <stdio.h>

int main(){
    int counter = 10;
    int number;
    int largest;
    // To determine the second largest
    int secondLargest;
    
    printf("Enter number: ", number);
    scanf("%d", &number);
    while(counter > 1){
        if(number > largest){
            secondLargest = largest;
            largest = number;
        };
        counter--;
        printf("Enter number: ");
        scanf("%d", &number);
    }
    printf("The largest number inputed was %d, while the second largest is %d", largest, secondLargest);
    return 0;
}
// little glitch in the last cycle it is no longer coming back to check the condition
// if its true cause the whilecondition is already false
