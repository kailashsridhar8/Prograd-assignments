package com.project1.hotelbookingsystem.crudrepo;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project1.hotelbookingsystem.model.User;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	User findByEmail(String email);
}
