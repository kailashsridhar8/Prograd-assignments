package com.project1.hotelbookingsystem.service;

import java.util.ArrayList;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		return new User("foo", "foo", (Collection<? extends GrantedAuthority>) new ArrayList<Object>());
	}

}
