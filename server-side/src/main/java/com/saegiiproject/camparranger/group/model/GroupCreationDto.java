package com.saegiiproject.camparranger.group.model;

import com.saegiiproject.camparranger.user.model.UserDto;

import java.util.List;

public class GroupCreationDto {
    private String name;
    private List<UserDto> users;

    public GroupCreationDto() {
    }

    public String getName() {
        return name;
    }

    public List<UserDto> getUsers() {
        return users;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsers(List<UserDto> users) {
        this.users = users;
    }
}
