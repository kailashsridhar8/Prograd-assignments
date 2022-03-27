/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.HashMap;
import java.util.Scanner;

/**
 *
 * @author VC
 */
public class Permutation {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String givenString = scan.next();
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < givenString.length(); i++) {
            if (map.containsKey(givenString.charAt(i))) {
                int count = (int) map.get(givenString.charAt(i));
                map.put(givenString.charAt(i), count + 1);
            } else {
                map.put(givenString.charAt(i), 1);
            }
        }
        int mapSize = map.size();
        int mapFact = fact(mapSize);
        int stringFact = fact(givenString.length());
        System.out.println(stringFact / mapFact);

    }

    private static int fact(int n) {
        if (n == 1 || n == 0) {
            return 1;
        }
        return n * fact(n - 1);
    }
}
