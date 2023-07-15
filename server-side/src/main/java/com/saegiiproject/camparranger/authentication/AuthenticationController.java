package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.authentication.model.LoginDto;
import com.saegiiproject.camparranger.user.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService service;

    @PostMapping("/login")
    public ResponseEntity<UserDto> authenticateUser(@RequestBody LoginDto loginDto) {
        return service.authenticate(loginDto);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody LoginDto registerDto) {
        return service.register(registerDto);
    }
}