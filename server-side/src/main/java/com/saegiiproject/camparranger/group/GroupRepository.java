package com.saegiiproject.camparranger.group;

import com.saegiiproject.camparranger.group.model.Group;
import com.saegiiproject.camparranger.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long>  {
    Group findByName(String email);

    List<Group> findByUsersId(Long userId);
}
