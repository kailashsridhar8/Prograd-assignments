package com.project1.hotelbookingsystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.project1.hotelbookingsystem.model.AuthenticationRequest;
import com.project1.hotelbookingsystem.model.AuthenticationResponse;
import com.project1.hotelbookingsystem.model.UserDTO;
import com.project1.hotelbookingsystem.service.MyUserDetailsService;
import com.project1.hotelbookingsystem.util.JwtUtil;

//import com.project1.hotelbookingsystem.model.User;
//import com.project1.hotelbookingsystem.repository.UserRepository;

@Controller
public class AppController {

	// @Autowired
	// UserRepository userRepo;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService; 
	
	@Autowired
	private JwtUtil jwtTokenUtil;

	@RequestMapping({"/abc"})
	public String home() {
		return "home.jsp";
	}


	// @RequestMapping("/signUser")
	// public ModelAndView signin(User reqParamObjectUser) {
	//
	// ModelAndView modelAndView = new ModelAndView("redirect:/login.jsp");
	//
	// // modelAndView.setViewName("login.jsp");
	//
	// userRepo.save(reqParamObjectUser);
	//
	// return modelAndView;
	//
	// }
	//
	// @RequestMapping("/loginUser")
	// public String login(String email, String password) {
	//
	// User loggedInUser = userRepo.findByEmail(email);
	//
	// if (loggedInUser != null) {
	// if (loggedInUser.getPassword().equals(password)) {
	//
	// return "home.jsp";
	// }
	// }
	// return "login.jsp";
	//
	// }

	@RequestMapping(value = "/authenticate",method=RequestMethod.POST)
	// ResponseEntity is HTTP
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {
		try{
		
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
				authenticationRequest.getPassword()));
		}
		catch(BadCredentialsException e){
			throw new Exception("Incorrect Username or Password");
		}
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
	
		final String jwt = jwtTokenUtil.generateToken(userDetails);
		
		
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}

}
