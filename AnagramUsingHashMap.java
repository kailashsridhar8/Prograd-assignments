/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.*;

/**
 *
 * @author VC
 */
public class Practiceproblems {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here

        Scanner scan = new Scanner(System.in);
        String given = scan.next(); //ABA
        String toCheck = scan.next();  //AAB

        char g[] = given.toCharArray();
        char t[] = toCheck.toCharArray();

        HashMap<Character, Integer> hmap = new HashMap<>();
        HashMap<Character, Integer> hmapt = new HashMap<>();

        for (int i = 0; i < g.length; i++) {
            if (hmap.get(g[i]) == null) {
                hmap.put(g[i], 1);
            } else {
                int c = (int) hmap.get(g[i]);
                hmap.put(g[i], ++c);
            }
        }
        for (int i = 0; i < t.length; i++) {
            if (hmapt.get(t[i]) == null) {
                hmapt.put(t[i], 1);
            } else {
                int c = (int) hmapt.get(t[i]);
                hmapt.put(t[i], ++c);
            }
        }
        if (hmap.equals(hmapt)) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not an Anagram");
        }
    }

}
