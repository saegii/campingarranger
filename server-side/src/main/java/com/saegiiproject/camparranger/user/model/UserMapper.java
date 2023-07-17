package com.saegiiproject.camparranger.user.model;

import com.saegiiproject.camparranger.authentication.model.LoginDto;
import com.saegiiproject.camparranger.group.model.GroupMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserMapper {
    @Autowired
    private GroupMapper groupMapper;

    public User mapToEntity(LoginDto loginDto) {
        return new User(loginDto.getEmail(), "");
    }

    public UserDto mapToDto(User user) {
        return new UserDto.Builder().id(user.getId()).email(user.getEmail()).groups(groupMapper.mapToDtoList(user.getGroups())).build();
    }

    public Object mapToDtos(List<User> users) {
        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(mapToDto(user));
        }
        return userDtos;
    }
}
