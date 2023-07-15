package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserMapper mapper;
    @Autowired
    private UserRepository repository;

    public LoginResponse authenticate(LoginRequest loginRequest) {
        try {
            User user = repository.findByEmail(loginRequest.getEmail());
            return createResponse(user.getId(), isAuthorized(user));
        } catch (Exception e) {
            return createResponse(null, false);
        }
    }



    public LoginResponse register(LoginRequest signUpRequest) {
        repository.save(mapper.mapToEntity(signUpRequest));
        LoginResponse response = new LoginResponse();
        response.setUserId(getUserId(signUpRequest.getEmail()));
        response.setAuthorized(true);
        return response;
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
