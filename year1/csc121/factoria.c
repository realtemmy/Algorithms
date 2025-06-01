#include <stdio.h>
//  n * (n-1)

int factoria(int num);

int main(){
    int number;
    printf("Enter a factorian number: ");
    scanf("%d", &number);
    printf("%d", factoria(number));
}

int factoria(int num){
    if(num == 0){
        return 1;
    }else{
        return num * factoria(num - 1);
    }
}