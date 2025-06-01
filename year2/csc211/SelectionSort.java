package year2.csc211;

import java.util.Arrays;

// selection sort: find the smallest number and swap with the first element, 
// find the second smallest number and swap with the second element etc

public class SelectionSort {
    public static void main(String[] args) {
        int array[] = { 2, 9, 5, 4, 8, 1, 6 };
        int start = 0;
        while (start < array.length ) {
            int sp = smallestPosition(array, start);
            swap(array, sp, start);
            start++;
        }
        System.out.println(Arrays.toString(array));
    }

    public static int smallestPosition(int[] array, int start) {
        int smallestPosition = start;
        int smallest = array[start];
        for (int i = start + 1; i < array.length; i++) {
            // compare current array element with smallest value
            if (array[i] < smallest) {
                smallest = array[i];
                smallestPosition = i;
            }

        }
        return smallestPosition;

    }

    public static void swap(int[] array, int smallestPosition, int start) {
        int temp = array[start];
        array[start] = array[smallestPosition];
        array[smallestPosition] = temp;
        // return smallestPosition;
    }
}
