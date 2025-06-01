// Sides of a Right Triangle
// Write a function that reads three nonzero integers and determines whether they are the sides of a right - angled triangle.
// The function should take three integer arguments and return 1(true) if the arguments comprise a right - angled triangle,
//  and 0 (false) otherwise.Use this function in a program that inputs a series of sets of integers

#include <stdio.h>
#include <math.h>

int isRightAndledTriangle(int hyp, int opp, int adj);

int main()
{
    int hyp;
    int opp;
    int adj;
    printf("Enter hypotenuse side: ", hyp);
    scanf("%d", &hyp);
    printf("Enter Opposite side: ", opp);
    scanf("%d", &opp);
    printf("Enter Adjacant side: ", adj);
    scanf("%d", &adj);

    printf("%d", isRightAndledTriangle(hyp, opp, adj));
}

int isRightAndledTriangle(int hyp, int opp, int adj)
{
    if (hyp == sqrt(pow(opp, 2) + pow(adj, 2)))
    {
        return 1;
    }
    else
    {
        return 0;
    }
}