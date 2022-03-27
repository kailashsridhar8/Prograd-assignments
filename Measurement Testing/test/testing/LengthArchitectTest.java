/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testing;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author VC
 */
public class LengthArchitectTest {

    public LengthArchitectTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void addCentimeterToKiloMeter() {
        LengthArchitecht kilometer = new LengthArchitecht(1, "km");
        LengthArchitecht centimeter = new LengthArchitecht(200, "cm");
        assertEquals(100200.0, centimeter.addTwoValues(kilometer), 0);
    }

    @Test
    public void addMeterToCentimeter() {
        LengthArchitecht meter = new LengthArchitecht(1, "m");
        LengthArchitecht centimeter = new LengthArchitecht(100, "cm");
        assertEquals(2.0, meter.addTwoValues(centimeter), 0);
    }

    @Test
    public void checkCentimeterValueEqualToMeter() {
        LengthArchitecht meter = new LengthArchitecht(1, "m");
        LengthArchitecht centimeter = new LengthArchitecht(100, "cm");
        assertTrue(meter.checkEquals(centimeter));
    }

    @Test
    public void checkCentimeterValueEqualToCentiMeter() {
        LengthArchitecht centimeter1 = new LengthArchitecht(1, "cm");
        LengthArchitecht centimeter2 = new LengthArchitecht(1, "cm");
        assertTrue(centimeter1.checkEquals(centimeter2));
    }

    @Test
    public void checkKilometerValueEqualToCentimeter() {
        LengthArchitecht kilometer = new LengthArchitecht(0.001, "km");
        LengthArchitecht centimeter = new LengthArchitecht(100, "cm");
        assertTrue(kilometer.checkEquals(centimeter));
    }
     @Test
    public void subtractMeterToCentimeter() {
        LengthArchitecht meter = new LengthArchitecht(1, "m");
        LengthArchitecht centimeter = new LengthArchitecht(50, "cm");
        assertEquals(0.5, meter.subTwoValues(centimeter), 0);
    }
     public void subtractCentimeterToMeter() {
        LengthArchitecht meter = new LengthArchitecht(1, "m");
        LengthArchitecht centimeter = new LengthArchitecht(2000, "cm");
        assertEquals(1900.0, centimeter.subTwoValues(meter), 0);
    }
    
}
