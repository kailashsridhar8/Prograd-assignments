package hotelBookingApp.repositories;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hotelBookingApp.models.User;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	User findByEmail(String email);
}
