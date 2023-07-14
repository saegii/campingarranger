package com.camparranger.camparrangerbackend.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class User {
    @Id
    private Long id;
    private String name;
    private String email;
    private String password;

    public Long getId() {
        return id;
    }

}
