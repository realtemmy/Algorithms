// Calculating Sales

#include <stdio.h>

int main()
{
    int productNum;
    int quantitySold;
    float retailPrice;

    printf("Enter produt number:", productNum);
    scanf("%d", &productNum);

    switch (productNum)
    {
    case 1:
        printf("Retail price: $ 2.98");
        break;
    case 2:
        printf("Retail price: $ 4.50");
        break;
    case 3:
        printf("Retail proce: $ 9.98");
        break;
    case 4:
        printf("Retail price: $ 4.49");
        break;
    case 5:
        printf("Retail price: $ 6.87");
        break;
    default:
        printf("Not specified");
        break;
    }

    return 0;
}
