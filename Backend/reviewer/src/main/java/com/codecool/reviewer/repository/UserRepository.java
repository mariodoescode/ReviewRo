package com.codecool.reviewer.repository;

import com.codecool.reviewer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
