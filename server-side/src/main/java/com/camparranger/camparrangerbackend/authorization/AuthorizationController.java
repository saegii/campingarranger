package com.camparranger.camparrangerbackend.authorization;

import com.camparranger.camparrangerbackend.user.LoginUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api")
public class AuthorizationController {

    private final AuthorizationService service;

    @Autowired
    public AuthorizationController(final AuthorizationService service) {
        this.service = service;
    }

    @PostMapping("/check-authorization")
    public boolean checkAuthorization(@RequestBody LoginUserDto user) {
        return service.checkAuthorization(user);
    }
}
