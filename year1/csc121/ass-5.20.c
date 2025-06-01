// Displaying a Rectangle of Any Character
//  Modify the function created in Exercise 5.19 to form the rectangle out of whatever character 
// is contained in character parameter fillCharacter.Thus if the sides are 5 and 4,
// and fillCharacter is "@", then the function should print the following:

#include <stdio.h>

void characterRectangle(char fillCharacter, int side1, int side2);

    int main()
{
    char fillCharacter;
    int side1;
    int side2;

    printf("Enter character: ", fillCharacter);
    scanf("%c", &fillCharacter);
    printf("Enter sides: ");
    scanf("%d%d", &side1, &side2);

    characterRectangle(fillCharacter, side1, side2);
}

void characterRectangle(char fillCharacter, int side1, int side2){
    for (int i = 0; i < side1; i++)
    {
        for (int j = 0; j < side2; j++)
        {
            printf("%c", fillCharacter);
        }
        puts("");
    }
}