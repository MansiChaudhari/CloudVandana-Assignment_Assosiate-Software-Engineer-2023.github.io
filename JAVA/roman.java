// B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9) 


package JAVA;

import java.util.HashMap;

public class roman {
    public static void main(String[] args) {
        String romanNumeral = "IX"; // Change this to your Roman numeral
        int result = romanToInteger(romanNumeral);
        System.out.println("The integer value of " + romanNumeral + " is: " + result);
    }
    public static int romanToInteger(String s) {
        // Create a mapping of Roman numeral symbols to their integer values
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = romanValues.get(s.charAt(i));

            if (currValue < prevValue) {
                result -= currValue;
            } else {
                result += currValue;
            }

            prevValue = currValue;
        }

        return result;
    }
}