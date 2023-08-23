package com.codecool.reviewer.repository;

import com.codecool.reviewer.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<AppUser, Long> {


    Optional<AppUser> findByUsername(String username);
    AppUser findAppUserByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    AppUser findAppUserById(Long id);
}
