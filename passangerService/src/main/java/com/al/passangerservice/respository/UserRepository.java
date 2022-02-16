package com.al.passangerservice.respository;

import com.al.passangerservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {

    User findByUsername(String username);
    User findByIdCarteRFID(String idCarteRFID);
    User findByUsernameAndPassword(String username,String password);
}
