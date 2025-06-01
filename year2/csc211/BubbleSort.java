package year2.csc211;

import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        // Bobble sort: compares each item with the previous till its sorted
        int[] array = { 4, 5, 2, 6, 8, 6, 9, 0 };
        for (int i = 1; i < array.length; i++) {
            int j = i - 1;
            while (j >= 0 && array[j] > array[j + 1]) {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                j--;
            }

        }
        System.out.println(Arrays.toString(array));
    }
}
