// C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet
// from a-z)

package JAVA;

import java.util.HashSet;

public class pangram {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Change this to your input
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        input = input.toLowerCase();
        HashSet<Character> alphabetSet = new HashSet<>();

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            if (ch >= 'a' && ch <= 'z') {
                alphabetSet.add(ch);
            }
        }

        return alphabetSet.size() == 26; // There are 26 letters in the English alphabet
    }
}
