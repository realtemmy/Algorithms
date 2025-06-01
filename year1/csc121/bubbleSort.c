// Creating bubble sort algorithm

#include <stdio.h>
#define SIZE 20

int main()
{
    int objArray[SIZE] = {2, 3, 7, 5, 6, 8, 1, 9, 4, 5, 3, 5, 6, 4, 2, 6, 3, 6, 7, 1};

    for (unsigned int a = 1; a < SIZE; ++a)
    {
        for (size_t i = 0; i < SIZE - 1; ++i)
        {
            if (objArray[i] > objArray[i + 1])
            {
                int hold = objArray[i];
                objArray[i] = objArray[i + 1];
                objArray[i + 1] = hold;
            }

        }
    }

    for (size_t i = 0; i < SIZE; ++i)
    {
        printf("%d", objArray[i]);
    }

    return 0;
}