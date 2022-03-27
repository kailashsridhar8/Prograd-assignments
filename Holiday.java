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
public class Holiday
{
    private String name;
    private int day;
    private String month;
    
    Holiday(String name,int day,String month)
    {
        this.name=name;
        this.day=day;
        this.month=month;
    }
    
    public String getMonth()
    {
      
        return this.month;
    }
    
    public int getDate()
    {
        return this.day;
    }
    
    
}
