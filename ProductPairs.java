/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author VC
 */
public class ProductPairs {
      public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n");
        int size = sc.nextInt();
        int arr[] = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter k");
        int target = sc.nextInt();
        Arrays.sort(arr);
        int start = 0;
        int end = arr.length - 1;
        int count = 0;
        while (start < end) {
      
            if (arr[start] * arr[end] == target) {
                count++;
                start++;
                end--;
            } else if (arr[start] * arr[end] < target) {
                start++;
            } else {
                end--;
            }
        }
        System.out.println("Total count is :"+" "+count);
    }
}
