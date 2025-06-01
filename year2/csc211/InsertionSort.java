package year2.csc211;

import java.util.Arrays;

public class InsertionSort {
    public static void main(String[] args) {
        int[] array = { 8, 2, 4, 1, 3 }; // 1, 2, 3, 4, 8
        for (int i = 1; i < array.length; ++i) {
            // ======== shift items correctly=======//
            int j = i - 1;
            while (j>= 0 && array[j + 1] < array[j]) {
                int temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
                j--;
            }

        }

        System.out.println(Arrays.toString(array));
    }
}
