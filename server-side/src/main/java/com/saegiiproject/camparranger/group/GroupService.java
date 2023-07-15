package com.saegiiproject.camparranger.group;

import com.saegiiproject.camparranger.group.model.Group;
import com.saegiiproject.camparranger.group.model.GroupCreationDto;
import com.saegiiproject.camparranger.group.model.GroupDto;
import com.saegiiproject.camparranger.group.model.GroupMapper;
import com.saegiiproject.camparranger.user.User;
import com.saegiiproject.camparranger.user.UserRepository;
import com.saegiiproject.camparranger.user.model.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class GroupService {

    @Autowired
    private GroupRepository repository;
    @Autowired
    private GroupMapper mapper;

    public ResponseEntity create(GroupCreationDto groupCreationDto) {
        try {
            if (repository.findByName(groupCreationDto.getName()) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Group with name '" + groupCreationDto.getName() + "' already exists");
            }
            Group group = repository.save(mapper.mapToEntity(groupCreationDto));
            return ResponseEntity.status(HttpStatus.CREATED).body(mapper.mapToDto(group));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong while signing in user: " + e.getMessage());
        }
    }
}
