package com.camparranger.camparrangerbackend.authorization;
import org.springframework.data.jpa.repository.JpaRepository;
import com.camparranger.camparrangerbackend.user.User;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorizationRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
