package com.saegiiproject.camparranger.group;

import com.saegiiproject.camparranger.group.model.Group;
import com.saegiiproject.camparranger.group.model.GroupCreationDto;
import com.saegiiproject.camparranger.group.model.GroupDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/group")
public class GroupController {

    @Autowired
    private GroupService service;

    @PostMapping("/create")
    public ResponseEntity<GroupDto> create(@RequestBody GroupCreationDto group) {
        return service.create(group);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Group>> getGroupsByUser(@PathVariable Long userId) {
        return service.getGroupsByUser(userId);
    }
}
