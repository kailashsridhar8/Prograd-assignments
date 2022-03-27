/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.Scanner;

/**
 *
 * @author VC
 */
public class practice17mar {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String givenString = scan.next();
        boolean result = givenString.matches("[P,R]+");
        if (result && givenString.length() != 1) {
            char[] charArr = givenString.toCharArray();
            int flag = 0;
            for (int i = 1; i < charArr.length; i++) {
                if (charArr[i] == 'P') {
                    if (charArr[i - 1] != 'R') {
                        flag = 1;
                    }
                } else if (charArr[i] == 'R') {
                    if (charArr[i - 1] != 'P') {
                        flag = 1;
                    }
                }
            }
            if (flag == 1) {
                System.out.println("Imperfect");
            } else {
                System.out.println("Perfect");
            }
        } else {
            System.out.println("Imperfect");
        }

    }
}
