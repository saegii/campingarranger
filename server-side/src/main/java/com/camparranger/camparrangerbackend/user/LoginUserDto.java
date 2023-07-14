package com.camparranger.camparrangerbackend.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginUserDto {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }
}
