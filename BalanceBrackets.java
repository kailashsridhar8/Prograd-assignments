import java.util.Scanner;
import java.util.Stack;

public class BalanceBrackets {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s=scan.next();
        System.out.println(balanceTheBrackets(s));
    }

    private static String balanceTheBrackets(String s) {
        StringBuilder sb=new StringBuilder(s);
        Stack<Character>st=new Stack<>();
        char str[]=s.toCharArray();
        for(int i=0;i<str.length;i++){
            if(str[i]==')'||str[i]=='}'||str[i]==']'){
                    if(st.empty()){
                        sb.insert(i,openingBracketFinder(str[i]));
                        st.push(str[i]);
                    }
                    else if(str[i]=='}'&&st.peek()!='{'){
                        sb.insert(i,openingBracketFinder(str[i]));
                        st.push(str[i]);                        
                    }
                    else if(str[i]==']'&&st.peek()!='['){
                        sb.insert(i,openingBracketFinder(str[i]));
                        st.push(str[i]);                        
                    }
                    else if(str[i]==')'&&st.peek()!='('){
                        sb.insert(i,openingBracketFinder(str[i]));
                        st.push(str[i]);                        
                    }
                    st.pop();
            }
            else{
                st.push(str[i]);
            }
          
        }
        while(!st.isEmpty()) 
        sb.append(ClosingBracketFinder(st.pop()));
    
    return sb.toString();

     
    }

    private static String ClosingBracketFinder(char c2) {
        if(c2 == '{')
        return "}";
        else if(c2 == '(')
        return ")";
        else
        return "]";
     
    }

    private static String openingBracketFinder(char c1) {
        if(c1 == '}')
        return "{";
        else if(c1 == ')')
        return "(";
        else
        return "[";
    }
}
