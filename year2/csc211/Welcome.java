package year2.csc211;

import java.util.*;

/**
 * Welcome
 */
public class Welcome {

    public static void main(String[] args) {
        final double PI = 3.142;
        
        // ======= Number of years and days from minutes ========= //
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number of minutes: ");
        long totalMinutes = input.nextLong();
        long hours = totalMinutes / 60;
        long day = hours / 24;
        long year = day / 356;
        System.out.println(totalMinutes +" minutes is approximately " + year+ " years and " + day + " days");
        

        // ======== Volume and area of cylinder ========== //
        // Scanner input = new Scanner(System.in);
        // System.out.print("Enter raduis of cylinder: ");
        // double radius = input.nextDouble();
        // System.out.print("Enter height of cylinder: ");
        // double height = input.nextDouble();

        // double area = PI * radius * radius;
        // double volume = area * height;
        // System.out.println("The area is " + area + ", and the volume is " + volume);

        // =========== Area of a circle ============== //

        // Scanner input = new Scanner(System.in);
        // System.out.println("Hello world");
        // System.out.print("Enter raduis(cm) to calc area: ");
        // double radius = input.nextDouble();

        // double area = PI * radius * radius;

        // System.out.println("Area of circle of radius " + radius + " is: " + area);

        // ========= Write a program that converts celcius to farhenheit =======
        // Scanner input = new Scanner(System.in);
        // System.out.print("Enter celcius value: ");
        // double celcius = input.nextDouble();
        // double fahrenheit = (9.0 / 5) * celcius + 32;
        // System.out.println(celcius + " celcius to fahrenheit is: " + fahrenheit);
    }
}