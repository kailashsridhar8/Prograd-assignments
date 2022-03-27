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
public class TestingTest {

    public TestingTest() {

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

    /**
     * Test of main method, of class Testing.
     */
    @Test
    public void testMain() {
        Student obj1 = new Student();
        obj1.setMarks(98);
        Student obj2 = new Student();
        obj2.setMarks(98);
        Student obj3 = new Student();
        obj3.setMarks(99);
        
      assertFalse(obj2.verifyMarks(null));
    //  assertFalse(obj2.verifyMarks(obj3));


    }

}
