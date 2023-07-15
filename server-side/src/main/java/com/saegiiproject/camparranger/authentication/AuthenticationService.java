package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.user.*;
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

    public ResponseEntity authenticate(LoginRequest loginRequest) {
        try {
            User user = repository.findByEmail(loginRequest.getEmail());
            if (user != null) {
                return ResponseEntity.status(HttpStatus.OK).body(createResponse(user.getId(), isAuthorized(user)));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Couldn't find user with email '" + loginRequest.getEmail() + "'");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while signing in user: " + e.getMessage());
        }
    }



    public ResponseEntity register(LoginRequest signUpRequest) {
        try {
            if (repository.findByEmail(signUpRequest.getEmail()) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User with email '" + signUpRequest.getEmail() + "' already exists");
            }
            User user = repository.save(mapper.mapToEntity(signUpRequest));
            return ResponseEntity.status(HttpStatus.CREATED).body(createResponse(user.getId(), true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while signing in user: " + e.getMessage());
        }
    }

    private LoginResponse createResponse(Long userId, boolean isAuthorized) {
        LoginResponse response = new LoginResponse();
        response.setUserId(userId);
        response.setAuthorized(isAuthorized);
        return response;
    }

    private boolean isAuthorized(User user) {
        return "".equals(user.getPassword());
    }

    private Long getUserId(String email) {
        User user = repository.findByEmail(email);
        return user.getId();
    }

}
