package com.project1.hotelbookingsystem.controller;




import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.project1.hotelbookingsystem.model.User;
import com.project1.hotelbookingsystem.repository.UserRepository;


@Controller
public class AppController {

	@Autowired
	UserRepository userRepo;

	@RequestMapping("/")
	public String home() {
		return "register.jsp";
	}

	@RequestMapping("/signUser")
	public ModelAndView signin(User reqParamObjectUser) {

		ModelAndView modelAndView = new ModelAndView("redirect:/login.jsp");

		// modelAndView.setViewName("login.jsp");

		userRepo.save(reqParamObjectUser);

		return modelAndView;

	}

	@RequestMapping("/loginUser")
	public String login(String email, String password) {

		User loggedInUser = userRepo.findByEmail(email);

		if (loggedInUser != null) {
			if (loggedInUser.getPassword().equals(password)) {

				return "home.jsp";
			}
		}
		return "login.jsp";

	}

}
