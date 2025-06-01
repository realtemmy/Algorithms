package year2.csc211;

import java.util.*;

// Write a greatest number that can divide two numbers ie HCF

public class GreatestDivider {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int n1 = input.nextInt();
        System.out.print("Enter second number: ");
        int n2 = input.nextInt();
        int k = 2;
        int gcd = 1; 

        while (k <= n1 && k <= n2) {
            if(n1 % k ==0 && n2 % k == 0){
                gcd = k;
            }
            k++;
        }
        System.out.println("The highest divider (HCF) is: " + gcd);
        int val = (int)'A';
        System.out.println("Value: " + val);
    }
}
