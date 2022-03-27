/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Stack;

/**
 *
 * @author VC
 */
public class MakeItPalindrome {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String givenString = scan.next();
        StringBuilder str1
            = new StringBuilder(givenString);
        if (!checkPalindrome(givenString)) {
            char ch[]=givenString.toCharArray();
             Deque<Character> s = new ArrayDeque<>();
            for(int i=0;i<ch.length;i++){
                s.push(ch[i]);
            }
            for(Character i : s) {
                if(ch[ch.length-1]!=i){
                    str1.append(i);
                }
            }
            System.out.println(str1.toString());
           
         
       
        } else {
            System.out.println("Its already Palindrome");
        }
    }

    private static boolean checkPalindrome(String given) {
        String str = "";
        for (int i = given.length() - 1; i >= 0; i--) {
            str += given.charAt(i);
        }
        return str.equals(given);
    }

}
