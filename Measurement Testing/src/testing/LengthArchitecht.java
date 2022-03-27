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
public class LengthArchitecht extends Measurement {

    public LengthArchitecht(double value, String unit) {
        super(value, unit);
    }

    @Override
    public double addTwoValues(Measurement otherUnit) {
        double ans = this.value + convertUnit(this.unit, otherUnit);
        return ans;
    }

    @Override
    public double subTwoValues(Measurement otherUnit) {
        double ans = this.value - convertUnit(this.unit, otherUnit);
        return ans;
    }

    @Override
    public boolean checkEquals(Measurement otherUnit) {
        return this.value == convertUnit(this.unit, otherUnit);
    }

    public double convertUnit(String unit, Measurement otherUnit) {
        if ((unit == "m") && (otherUnit.unit == "m")) {
            return otherUnit.value;
        } else if ((unit == "m") && (otherUnit.unit == "cm")) {
            return otherUnit.value / 100;
        } else if ((unit == "cm") && (otherUnit.unit == "cm")) {
            return otherUnit.value;
        } else if ((unit == "cm") && (otherUnit.unit == "m")) {
            return otherUnit.value * 100;
        } else if ((unit == "cm") && (otherUnit.unit == "km")) {
            return otherUnit.value * 100_000;
        } else if ((unit == "km") && (otherUnit.unit == "cm")) {
            return otherUnit.value / 100000;
        }
        return 0;
    }
}
