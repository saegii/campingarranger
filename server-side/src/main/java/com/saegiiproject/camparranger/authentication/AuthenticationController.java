package com.saegiiproject.camparranger.authentication;

import com.saegiiproject.camparranger.user.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = service.authenticate(loginRequest);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody LoginRequest signUpRequest) {
        LoginResponse response = service.register(signUpRequest);
        return ResponseEntity.ok(response);
    }
}