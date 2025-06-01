package year2.csc211;

import java.util.Scanner;

public class BinarySearch {
    public static void main(String[] args) {
        int array[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number to search for (between 0 and 10): ");
        int key = input.nextInt();
        // int key = 6;
        int result = search(array, key);
        // String message = result > 1 ? ""
        System.out.println("Value of search is position: " + result);
    }

    public static int search(int array[], int key) {
        int low = 0;
        int high = array.length - 1;
        while (high >= low) {
            int mid = (high + low) / 2;
            if (key < array[mid]) {
                high = mid;
            } else if (key == array[mid]) {
                return mid;
            } else {
                low = mid;
            }

            
        }
        return -1;
    }
}
