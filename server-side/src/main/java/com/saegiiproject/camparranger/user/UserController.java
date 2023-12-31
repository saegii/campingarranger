package com.saegiiproject.camparranger.user;

import com.saegiiproject.camparranger.group.model.Group;
import com.saegiiproject.camparranger.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/api/user")
public class UserController {

    @Autowired
    private UserService service;
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        return service.getUserById(userId);
    }
    @GetMapping("/all")
    public ResponseEntity<List<User>> getGroupsByUser() {
        return service.getAllUsers();
    }
}
