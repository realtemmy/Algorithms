package year2.csc211;

// display the first 50 prime numbers in five lines
public class PrimeNumbers {
    public static void main(String[] args) {
        // determine whether a given number is prime
        // count prime numbers
        // display 10 per line

        final int NO_OF_PRIME = 50;
        for (int i = 1; i < NO_OF_PRIME; i++) {
            // check if no is prime
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    break;
                }
                System.out.println(i);
            }

        }
    }
}
