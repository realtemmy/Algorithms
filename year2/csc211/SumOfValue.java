package year2.csc211;

import java.util.*;

public class SumOfValue {
    public static void main(String[] args) {
        // ============ Write a program that reads an integer between 0 and
        // 1000 and adds all the digits in the integer. For example, if an integer is
        // 932, the
        // sum of all its digits is 14. =========== //
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number betwen 0 and 1000: ");
        long number = input.nextLong();
        long a = number % 10;
        number = number / 10;
        long b = number % 10;
        number = number / 10;
        long total = a + b + number;
        System.out.println("Value: " + total);
        // to reverse
        System.out.println( "Reversed digit: " + a + b + number);
    }
}
