/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

/**
 *
 * @author VC
 */
public class Practicemarch16 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String givenString = scan.nextLine();
        String[] givenStrArr;
        givenStrArr = givenString.split(" ");
        HashSet<Integer> hset = new HashSet<>();
        for (String givenStrArr1 : givenStrArr) {
            if (givenStrArr1.length() > 9) { //for test case  ",29-02-2000"
                if (givenStrArr1.charAt(2) == '-' && givenStrArr1.charAt(5) == '-') {   // for test case "mother-in-law"
                    if (checkString(givenStrArr1.substring(0, 2)) && checkString(givenStrArr1.substring(3, 5)) 
                            &&checkString(givenStrArr1.substring(6, 10))) {
                        int year = Integer.parseInt(givenStrArr1.substring(6, 10));
                        hset.add(year);
                    }
                }
            }
        }
        System.out.println(hset.size());
    }

    private static boolean checkString(String string) {
        try {
            int year=Integer.parseInt(string);
            if(year!=0){   // for test case 29-00-2000
             return true;
            }
           
        } catch (NumberFormatException e) {
            
        }
        return false;

    }
}
