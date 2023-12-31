package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.authentication.model.LoginDto;
import com.saegiiproject.camparranger.user.*;
import com.saegiiproject.camparranger.user.model.User;
import com.saegiiproject.camparranger.user.model.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserMapper mapper;
    @Autowired
    private UserRepository repository;

    public ResponseEntity authenticate(LoginDto loginDto) {
        try {
            User user = repository.findByEmail(loginDto.getEmail());
            if (user != null) {
                return ResponseEntity.status(HttpStatus.OK).body(mapper.mapToDto(user));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Couldn't find user with email '" + loginDto.getEmail() + "'");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while signing in user: " + e.getMessage());
        }
    }

    public ResponseEntity register(LoginDto signUpRequest) {
        try {
            if (repository.findByEmail(signUpRequest.getEmail()) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User with email '" + signUpRequest.getEmail() + "' already exists");
            }
            User user = repository.save(mapper.mapToEntity(signUpRequest));
            return ResponseEntity.status(HttpStatus.CREATED).body(mapper.mapToDto(user));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while signing in user: " + e.getMessage());
        }
    }
}
