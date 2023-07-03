package com.codecool.reviewer.repository;

import com.codecool.reviewer.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findOneByEmailAndPassword(String email, String password);

    AppUser findByEmail(String email);

    Optional<AppUser> findByUsername(String username);
}
