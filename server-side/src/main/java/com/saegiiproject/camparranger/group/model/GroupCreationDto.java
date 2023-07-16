package com.saegiiproject.camparranger.group.model;

import com.saegiiproject.camparranger.user.model.UserDto;

import java.util.List;

public class GroupCreationDto {
    private String name;
    private List<Long> userIds;

    public GroupCreationDto() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Long> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Long> userIds) {
        this.userIds = userIds;
    }
}
