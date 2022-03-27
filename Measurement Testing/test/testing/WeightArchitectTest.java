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
public class WeightArchitectTest {
    
    public WeightArchitectTest() {
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
       public void addGramToKilogram()
       {
           WeightArchitect gram = new WeightArchitect(10,"g");
           WeightArchitect kilogram = new WeightArchitect(1,"kg");
           assertEquals(1010.0, gram.addTwoValues(kilogram),0);
       }

       @Test
       public void checkKilogramEqualsToGram()
       {
           WeightArchitect gram = new WeightArchitect(100,"g");
           WeightArchitect kilogram = new WeightArchitect(0.1,"kg");
           assertTrue(gram.checkEquals(kilogram));
       }
       @Test
       public void checkOneGramEqualsToOneGram()
       {
           WeightArchitect gram1 = new WeightArchitect(1,"g");
           WeightArchitect gram2 = new WeightArchitect(1,"g");
           assertTrue(gram1.checkEquals(gram2));
       }
       @Test
       public void subtractKilogramtoGram()
       {
           WeightArchitect gram = new WeightArchitect(500,"g");
           WeightArchitect kilogram = new WeightArchitect(1.5,"kg");
           assertEquals(1.0, kilogram.subTwoValues(gram),0);
       }
}
