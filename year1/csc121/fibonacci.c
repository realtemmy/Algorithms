#include <stdio.h>
// Fibonacci of numbers

int fibonacci(int num);

int main(){
    int number;
    printf("Enter fibonacci number: ");
    scanf("%d", &number);
    printf("%d", fibonacci(number));
}

int fibonacci(int num){
    if(num == 0){
        return 0;
    }else if(num == 1){
        return 0;
    }else if(num == 2){
        return 1;
    }else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
    // return num + fibonacci(num - 1);
}