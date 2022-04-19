package com.project1.hotelbookingsystem.model;

import javax.persistence.Column;

import com.sun.istack.NotNull;

public class UserDTO {
	@NotNull
	@Column(name = "username", unique = true)
	private String username;
	private String password;
	private String email;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
