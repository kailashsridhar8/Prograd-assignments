package com.project1.hotelbookingsystem.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project1.hotelbookingsystem.model.DAOUser;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {

	DAOUser findByUsername(String username);
	// as we return DAOUser object, we use DAOUser as the type for
	// findByUsername
}