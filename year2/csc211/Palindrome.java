package year2.csc211;

import java.util.*;

// palindrome are words that are words that read the same forward and backward eg. mom, dad, civic, noon etc
public class Palindrome {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String word = input.nextLine();
        int strLen = word.length() - 1;
        boolean isPalindrome = true;
        for (int i = 0; i < strLen; i++, strLen--){
            if(word.charAt(i) != word.charAt(strLen)){
                isPalindrome = false;
                break;
            }
        }
        String message = isPalindrome ? "Word is a palindrome" : "Word is not a palindrome";
        System.out.println(message);
    }
}
