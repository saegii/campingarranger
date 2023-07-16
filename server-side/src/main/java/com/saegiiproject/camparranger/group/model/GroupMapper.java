package com.saegiiproject.camparranger.group.model;

import com.saegiiproject.camparranger.user.User;
import com.saegiiproject.camparranger.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class GroupMapper {

    @Autowired
    private UserRepository userRepository;

    public Group mapToEntity(GroupCreationDto creationDto) {
        Group group = new Group();
        group.setName(creationDto.getName());
        group.setUsers(userRepository.findAllById(creationDto.getUserIds()));
        return group;
    }

    public GroupDto mapToDto(Group group) {
        return new GroupDto.Builder().id(group.getId()).name(group.getName()).build();
    }

    public List<GroupDto> mapToDtoList(List<Group> groups) {
        List<GroupDto> groupDtos = new ArrayList<>();
        for (Group group : groups) {
            groupDtos.add(mapToDto(group));
        }
        return groupDtos;
    }
}
