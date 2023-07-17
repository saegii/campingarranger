package com.saegiiproject.camparranger.user;

import com.saegiiproject.camparranger.group.model.Group;
import com.saegiiproject.camparranger.user.model.User;
import com.saegiiproject.camparranger.user.model.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;
    @Autowired
    private UserMapper mapper;

    public ResponseEntity getUserById(Long userId) {
        try {
            Optional<User> userOpt = repository.findById(userId);
            if (userOpt.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(mapper.mapToDto(userOpt.get()));
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Couldn't find user for id: " + userId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while loading user by id: " + e.getMessage());
        }
    }
}
