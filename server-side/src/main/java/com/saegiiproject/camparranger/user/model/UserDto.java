package com.saegiiproject.camparranger.user.model;

import com.saegiiproject.camparranger.group.model.GroupDto;

import java.util.List;


public class UserDto {
    private Long id;
    private String email;
    private List<GroupDto> groups;

    private UserDto() {
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public List<GroupDto> getGroups() {
        return groups;
    }

    public static class Builder {
        private Long id;
        private String email;
        private List<GroupDto> groups;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder groups(List<GroupDto> groups) {
            this.groups = groups;
            return this;
        }

        public UserDto build() {
            UserDto userDto = new UserDto();
            userDto.id = this.id;
            userDto.email = this.email;
            userDto.groups = this.groups;
            return userDto;
        }
    }

    public static Builder builder() {
        return new Builder();
    }
}
