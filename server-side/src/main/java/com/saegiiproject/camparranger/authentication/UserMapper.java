package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.authentication.LoginRequest;
import com.saegiiproject.camparranger.user.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User mapToEntity(LoginRequest loginRequest) {
        return new User(loginRequest.getEmail(), "");
    }
}
