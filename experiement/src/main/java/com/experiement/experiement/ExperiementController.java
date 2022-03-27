package com.experiement.experiement;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExperiementController {
   @RequestMapping("/")
   public String print(){
       return "Hello World";
   } 
}
