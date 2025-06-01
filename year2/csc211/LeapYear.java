package year2.csc211;

import java.util.Scanner;

// A leap year is divided by 4 but not 100,orcan be divided by 400
public class LeapYear {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a integer: ");
        int year = input.nextInt();
        boolean leapYear = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
        String message = leapYear ? year + " is a leap year" : year + " is not a leap year";
        System.out.println(message);
    }
}
