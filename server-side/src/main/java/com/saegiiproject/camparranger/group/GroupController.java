package com.saegiiproject.camparranger.group;

import com.saegiiproject.camparranger.group.model.GroupCreationDto;
import com.saegiiproject.camparranger.group.model.GroupDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/group")
public class GroupController {

    @Autowired
    private GroupService service;

    @PostMapping("/login")
    public ResponseEntity<GroupDto> authenticateUser(@RequestBody GroupCreationDto group) {
        return service.create(group);
    }
}
