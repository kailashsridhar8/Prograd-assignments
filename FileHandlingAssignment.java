/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fwa2;

import java.io.*;
import java.util.Scanner;


/**
 *
 * @author VC
 */
public class Fwa2 {
 static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        // TODO code application logic here
       
         Fwa2 call = new Fwa2();
         call.showMenu();
        
    }

    private void showMenu() throws IOException {
        
      System.out.print("1 : Add Records\n2 : Display Records\n3 : Exit\n\nYour Choice : ");
      Scanner scan=new Scanner(System.in);
      int choice = scan.nextInt();
      switch(choice)
      {
      case 1:
      addRecords();
      break;
      case 2:
      readRecords();
      break;
      case 3:
      System.exit(1);
      break;
      default:
      System.out.println("\nInvalid Choice !");
      break;
 }
    }

    private void addRecords() throws IOException {
     try (PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("stuRecords.txt",true)))) {
         String name;
         String rollno;
         String branch;
         boolean addMore = false;
         String s;
         do
         {
             System.out.print("\nEnter name: ");
             name = br.readLine();
             
             System.out.print("Enter rollno: ");
             rollno = br.readLine();
             
             System.out.print("Enter branch: ");
             branch = br.readLine();
             
             pw.println(name);
             pw.println(rollno);
             pw.println(branch);
             
             System.out.print("\nRecords added Do you want to add more records (y/n):");
             s = br.readLine();
             if(s.equalsIgnoreCase("y"))
             {
                 addMore = true;
                 System.out.println();
             }
             else
                 addMore = false;
         }
         while(addMore);
     }
 showMenu();
 }

    private void readRecords() throws IOException {
         try
 {
             try ( 
                     BufferedReader file = new BufferedReader(new FileReader("stuRecords.txt"))) {
                 String name;
                 while((name = file.readLine()) != null)
                 {
                     
                     System.out.println("-------------");
                     System.out.println("\nName: " +name);
                     System.out.println("Roll No : "+file.readLine());
                     System.out.println("Branch : "+file.readLine());
                     System.out.println();
                 }          }
  showMenu();
 }
 catch(FileNotFoundException e)
 {
  System.out.println("\nERROR : File not Found !!!");
 }
    }
        
    }

   
    

