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
public class ValidatingIp {

    public ValidatingIp() {
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

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    @Test
    public void testValid() {
        assertTrue(IpValidation.validate("1.1.1.1"));
        assertTrue(IpValidation.validate("1.1.1.254"));
        assertTrue(IpValidation.validate("255.1.1.1"));

    }

    @Test
    public void testInValid() {
        assertFalse(IpValidation.validate("1.1.1.255"));
        assertFalse(IpValidation.validate("1.1.1.999"));
        assertFalse(IpValidation.validate("1.1.1.0"));
        assertFalse(IpValidation.validate("1.1.a.a"));
        assertFalse(IpValidation.validate("1.1.1.256"));
    }

}
