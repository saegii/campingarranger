package com.saegiiproject.camparranger.group.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class GroupMapper {

    public Group mapToEntity(GroupCreationDto creationDto) {
        return new Group(creationDto.getName());
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
