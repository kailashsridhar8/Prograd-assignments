    /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

import java.util.*;

public class Tues15 {

    public static void main(String args[]) {
        //SWAP
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        ArrayList<Integer> al = new ArrayList<Integer>(n);

        for (int i = 0; i < n; i++) {
            al.add(scan.nextInt());
        }

        for (int i = 0; i < n - 1; i += 2) {
            int temp = al.get(i);
            al.set(i, al.get(i + 1));
            al.set(i + 1, temp);

        }
        for (int i = 0; i < n; i++) {
            System.out.println(al.get(i));
        }

    }
}
