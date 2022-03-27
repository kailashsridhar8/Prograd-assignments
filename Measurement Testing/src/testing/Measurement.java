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
public abstract class Measurement {

    double value;
    String unit;

    public Measurement(double value, String unit) {
        this.value = value;
        this.unit = unit;
    }
    public abstract double addTwoValues(Measurement otherUnit);
    public abstract double subTwoValues(Measurement otherUnit);
    public abstract boolean checkEquals(Measurement otherUnit);
}
