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

public class TemperatureArchitect extends Measurement{
    public TemperatureArchitect(double value, String unit) {
        super(value, unit);
    }

    public double changeScale()
    {
        if(this.unit.equalsIgnoreCase("c"))
        {
            return (this.value * 9/5) + 32;
        }
        if(this.unit.equalsIgnoreCase("f"))
        {
            return (this.value - 32) * 5/9;
        }
        if(this.unit.equalsIgnoreCase("k"))
        {
            return this.value - 273.0;
        }
        return 0;

    }

    @Override
    public double addTwoValues(Measurement otherUnit) {
        return 0;
    }

    @Override
    public double subTwoValues(Measurement otherUnit) {
        return 0;
    }

    @Override
    public boolean checkEquals(Measurement otherUnit) {
        
        return false;
    }
}