package com.experiement.experiement;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Employee {
    @RequestMapping("/home")
    @ResponseBody
    public String home_page(){
        return "out.jsp";
    }
    @RequestMapping("/prof")
    @ResponseBody
    public String prof_page(){
        return "Profile";
    }
}
