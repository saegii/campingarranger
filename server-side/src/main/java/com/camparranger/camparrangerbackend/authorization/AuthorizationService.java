package com.camparranger.camparrangerbackend.authorization;

import com.camparranger.camparrangerbackend.user.LoginUserDto;
import com.camparranger.camparrangerbackend.user.User;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService {

    private final AuthorizationRepository repository;

    public AuthorizationService(final AuthorizationRepository repository) {
        this.repository = repository;
    }

    public boolean checkAuthorization(LoginUserDto user) {
        User storedUser = repository.findByEmail(user.getEmail());
        return !"".equals(storedUser.getId());
    }
}
