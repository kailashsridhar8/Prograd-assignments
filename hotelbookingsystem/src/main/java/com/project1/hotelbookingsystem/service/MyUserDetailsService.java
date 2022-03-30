package com.project1.hotelbookingsystem.service;

import java.util.ArrayList;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		//return new User("foo", "foo", (Collection<? extends GrantedAuthority>) new ArrayList<Object>());
//		return new User("abc", "abc", (Collection<? extends GrantedAuthority>) new ArrayList<Object>());
		 return new User("abc", "foo",new ArrayList<>());
	}

}
