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

public class WeightArchitect extends Measurement{
    public WeightArchitect(double value, String unit) {
        super(value, unit);
    }

  
    @Override
    public double addTwoValues(Measurement otherUnit) {
        return this.value+convertUnit(this.unit,otherUnit);
    }

    @Override
    public double subTwoValues(Measurement otherUnit) {
        return this.value-convertUnit(this.unit,otherUnit);
    }

    @Override
    public boolean checkEquals(Measurement otherUnit)
    {

        return this.value==convertUnit(this.unit,otherUnit);
    }
  public double convertUnit(String unit, Measurement otherUnit) {
        if((unit == "g") && (otherUnit.unit == "g"))
        {
            return otherUnit.value;
        }
        else if((unit == "g") && (otherUnit.unit == "kg"))
        {
            return otherUnit.value*1000;
        }
        else if((unit == "kg") && (otherUnit.unit == "kg"))
        {
            return otherUnit.value;
        }
        else if((unit == "kg") && (otherUnit.unit == "g")) {
            return otherUnit.value/1000;
        }

        return 0;
    }
}