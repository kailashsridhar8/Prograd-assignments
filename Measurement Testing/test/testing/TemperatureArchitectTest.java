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
public class TemperatureArchitectTest {

    public TemperatureArchitectTest() {
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
    public void celciusToFaherinheit() {
        TemperatureArchitect celcius = new TemperatureArchitect(0, "c");
        assertEquals(32.0, celcius.changeScale(), 0);

    }

    @Test
    public void FaherinheitToCelcius() {

        TemperatureArchitect faherinheit = new TemperatureArchitect(32, "f");
        assertEquals(0.0, faherinheit.changeScale(), 0);

    }

    @Test
    public void KelvinToCelcius() {

        TemperatureArchitect kelvin = new TemperatureArchitect(0, "k");
        assertEquals(-273.0, kelvin.changeScale(), 0);

    }
}
