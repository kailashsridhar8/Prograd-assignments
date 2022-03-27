/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication2;

/**
 *
 * @author VC
 */
public class JavaApplication2 {

    /**
     * @param args the command line arguments
     */
    
     public static boolean inSameMonth(String mon1,String mon2)
    {
        return mon1.equals(mon2);
    }
    
    public static double avgDate(Holiday arr[])
    {
      int avg = 0;
      
      for(int i=0;i<arr.length;i++)
      {
          avg+=arr[i].getDate();
      }
      int length = arr.length;

      double val = (double)avg/length;
      return val;
    }
    
    
    public static void main(String[] args) {
        
        Holiday h1 = new Holiday("Diwali",25,"10");
	Holiday h2 = new Holiday("Independence Day",10,"08");
		

        Holiday holiArray[]={h1,h2};
		
		System.out.println(inSameMonth(h1.getMonth(),h2.getMonth()));
		System.out.println(avgDate(holiArray));
		
	
    }
    
}
