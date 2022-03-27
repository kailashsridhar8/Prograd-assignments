/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practiceproblems;

/**
 *
 * @author VC
 */
import java.io.*;
import java.util.Scanner;

public class FileProgram {

    public static void createFile(String str) {
        try {
            File myObj = new File("D:/" + str + ".txt");
            if (myObj.createNewFile()) {
                System.out.println("File created: " + myObj.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public static void writeToFile(String str) {
        try {
            FileWriter myWriter = new FileWriter("D:/" + str + ".txt");
            myWriter.write("Hey new file! How have you been doing?");
            myWriter.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public static void readFile(String str) {
        try {
            File myObj = new File("D:/" + str + ".txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        // TODO code application logic here
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the file name : ");
        String fn = scan.next();

        createFile(fn);
        writeToFile(fn);
        readFile(fn);
    }

}
