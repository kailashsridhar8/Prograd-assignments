/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testing;

/**
 *
 * @author VC
 */
public class Student {
    private int marks;
  /**
     * @return the marks
     */
    public int getMarks() {
        return marks;
    }

    /**
     * @param marks the marks to set
     */
    public void setMarks(int marks) {
        this.marks = marks;
    }
    public boolean verifyMarks(Student obj){
        return obj!=null&&this.marks==obj.getMarks();                                       
    }
}
