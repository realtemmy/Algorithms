// Past questions for preperation of test
/*
Write a program in C to search through anarray for a particular number. Below is a list of expectations
a)The program should accept 100 arbitrary integer numbers and store them in an array
b)after accepting all numbers, print out the list of numbers accepted
c) ask user for a raandom number to be searched for
d)The program should search through the array for the number;
e)Print true and location within the array if the number was found or false if it was'nt in the array 
*/ 
#include <stdio.h>
#define SIZE 100

int search(int arr[], int size, int searchKey);

int main()
{
    // Initialization
    int numArray[SIZE];
    int searchkey;

    // Accept 100 numbers and store in an array
    for (size_t i = 0; i < SIZE; ++i)
    {
        numArray[i] = i + 1;
    }

    // Print all elements in the array
    for (size_t i = 0; i < SIZE; ++i)
    {
        printf("%d ", numArray[i]);
    }

    // Ask user for a number to search for
    printf("\nEnter number to search for: ");
    scanf("%d", &searchkey);

    int value = search(numArray, SIZE, searchkey);
    if (value > 1)
    {
        int location = value - 1;
        printf("True, array contains value %d at index %d", searchkey, location);
    }
    else
    {
        printf("False, array does not contain value %d", searchkey);
    }
}


// FUNCTIONS
int search(int arr[], int size, int searchKey)
{
    // search through array for searchkey
    for (int i = 0; i < size; ++i)
    {
        if (arr[i] == searchKey)
        {
            return 1 + i;
        }
    }

    return 0;
}