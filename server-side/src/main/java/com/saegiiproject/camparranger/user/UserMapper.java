package com.saegiiproject.camparranger.user;

import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User mapToEntity(LoginRequest loginRequest) {
        return new User(loginRequest.getEmail(), "");
    }
}
