/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package firstweekassignment;

/**
 *
 * @author VC
 */
import java.util.*;
public class FirstWeekAssignment {

    /**
     * @param givenArr
     */
    public static void calculateAns(String[] givenArr){
        int firstNumber=Integer.parseInt(givenArr[0]);
        int thirdNumber=Integer.parseInt(givenArr[2]);
        double res = 0;
        try{
       switch(givenArr[1])
		{
		    case "+":
		        res = firstNumber+thirdNumber;
		        break;
		    case "-":
		        res = firstNumber-thirdNumber;
		        break;
		    case "*":
		        res = firstNumber*thirdNumber;
		        break;
		    case "/":
		        res = (double)(firstNumber/thirdNumber);
		        break;
		    case "%":
		        res = firstNumber%thirdNumber;
		        break;
		 
		}
       System.out.println(res);
        }
        catch(Exception e){
            System.out.println(e);
        }
       
    }
    public static void validateGiven(String[] givenArr) throws InvalidOperatorException{
        Character[] operators={'+','-','*','/','%'};
        List<Character> arrList = new ArrayList<>(Arrays.asList(operators));
        
        Character ch=(Character)givenArr[1].charAt(0);
        if(!Character.isDigit(givenArr[0].charAt(0))&&!Character.isDigit(givenArr[0].charAt(0))&&!Character.isDigit(givenArr[2].charAt(0))){
             throw new InvalidOperatorException("First and Third operand is not a Digit and the second is not an operator");
        } 
        
        if(!Character.isDigit(givenArr[0].charAt(0))&&!Character.isDigit(givenArr[0].charAt(0))){
             throw new InvalidOperatorException("First operand is not a Digit and second is not an operator ");
        }
        
        if(!Character.isDigit(givenArr[0].charAt(0))&&!Character.isDigit(givenArr[2].charAt(0))){
             throw new InvalidOperatorException("Both First and Third operand is not a Digit");
        }
        
        if(!arrList.contains(ch)&&!Character.isDigit(givenArr[2].charAt(0))){
             throw new InvalidOperatorException("Second is not an operator and Third operand is not a Digit");
        }
        
        if(!Character.isDigit(givenArr[0].charAt(0))){
            throw new InvalidOperatorException("First operand is not a Digit");
        }
        
        if(!arrList.contains(ch)){
             throw new InvalidOperatorException("Second is not an operator");
        }
        
        if(!Character.isDigit(givenArr[2].charAt(0))){
            throw new InvalidOperatorException("Third operand is not a Digit");
        } 
       
        
    }
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner scan =new Scanner(System.in);
        String given=scan.nextLine();
        String givenArr[]=given.split("\\s+");
        try{
            validateGiven(givenArr);
            calculateAns(givenArr);
        }
        catch(InvalidOperatorException e){
            System.out.println(e);
        }
        
    }
    
}
